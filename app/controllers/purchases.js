'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
const Purchase = models.purchase;

const authenticate = require('./concerns/authenticate');

const index = (req, res, next) => {
  Purchase.find()
  // Purchase.find({_userId: req.currentUser._id})
    .then(purchases => res.json({ purchases }))
    .catch(err => next(err));
};

const show = (req, res, next) => {
  Purchase.findById(req.params.id)
    .then(purchase => purchase ? res.json({ purchase }) : next())
    .catch(err => next(err));
};

const create = (req, res, next) => {
  let purchase = Object.assign(req.body.purchase, {
    _userId: req.currentUser._id,
  });
  Purchase.create(purchase)
    .then(purchase => res.json({ purchase }))
    .catch(err => next(err));
};

const update = (req, res, next) => {
  let search = { _id: req.params.id, _userId: req.currentUser._id };
  Purchase.findOne(search)
    .then(purchase => {
      if (!purchase) {
        return next();
      }

      return purchase.update(req.body.purchase)
        .then(() => res.sendStatus(200));
    })
    .catch(err => next(err));
};

const destroy = (req, res, next) => {
  let search = { _id: req.params.id, _userId: req.currentUser._id };
  Purchase.findOne(search)
    .then(purchase => {
      if (!purchase) {
        return next();
      }

      return purchase.remove()
        .then(() => res.sendStatus(200));
    })
    .catch(err => next(err));
};

module.exports = controller({
  index,
  show,
  create,
  update,
  destroy,
}, { before: [
  { method: authenticate },
], });
