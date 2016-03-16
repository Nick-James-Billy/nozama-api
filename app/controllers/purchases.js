'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
const Purchase = models.purchase;
const stripe = require('stripe')('sk_test_BQokikJOvBiI2HlWgH4olfQ2');

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

const getPurchaseHistory = (req, res, next) => {
  Purchase.find({completed: true})
  .then(purchases => purchases ? res.json({ purchases }) : next())
  .catch(err => next(err));
};

const getCurrentCart = (req, res, next) => {
  Purchase.find({completed: false})
  .then(purchases => purchases ? res.json({ purchases }) : next())
  .catch(err => next(err));
};

const create = (req, res, next) => {
  let purchase = Object.assign({ _userId: req.currentUser._id }, req.body.purchase);
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

const createCharge = (req, res, next) => {
  stripe.charges.create({
    amount: req.body.amount,
    currency: "usd",
    source: req.body.source, // obtained with Stripe.js
  }).then(charge => res.json({ charge }))
  .catch(err => next(err));
};

module.exports = controller({
  getPurchaseHistory,
  getCurrentCart,
  index,
  show,
  create,
  update,
  destroy,
  createCharge,
}, { before: [
  { method: authenticate },
], });
