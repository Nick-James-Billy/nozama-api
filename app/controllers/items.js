'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
const Item = models.item;
const normalizedName = require('../../scripts/normalizedNameModule.js');
const authenticate = require('./concerns/authenticate');

const index = (req, res, next) => {
  Item.find()
    .then(items => res.json({ items }))
    .catch(err => next(err));
};

const show = (req, res, next) => {
  Item.findById(req.params.id)
    .then(item => item ? res.json({ item }) : next())
    .catch(err => next(err));
};

const create = (req, res, next) => {
  let item = Object.assign(req.body.item, {
    _owner: req.currentUser._id,
  });
  Item.create(item)
    .then(item => res.json({ item }))
    .catch(err => next(err));
};

const update = (req, res, next) => {
  let search = { _id: req.params.id };
  Item.findOne(search)
    .then(item => {
      if (!item) {
        return next();
      }

      return item.update(req.body.item)
        .then(() => res.sendStatus(200));
    })
    .catch(err => next(err));
};

const destroy = (req, res, next) => {
  let search = { _id: req.params.id };
  Item.findOne(search)
    .then(item => {
      if (!item) {
        return next();
      }

      return item.remove()
        .then(() => res.sendStatus(200));
    })
    .catch(err => next(err));
};

const searchByName = (req, res, next) => {

  let searchName = normalizedName(req.body.name);

  Item.find().then(items => items.forEach((item) => {
    let name = item.name;
    let lowerCaseName = normalizedName(name);

    if (lowerCaseName.includes(searchName)) {
        res.json({item});
    }

  })).catch(err => next(err));

};

module.exports = controller({
  index,
  show,
  create,
  update,
  destroy,
  searchByName
}, { before: [
  { method: authenticate, except: ['index', 'show'] },
], });
