'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
const Purchase = models.purchase;

const authenticate = require('./concerns/authenticate');

const index = (req, res, next) => {
  Purchase.find()
    .then(purchases => res.json({ purchases }))
    .catch(err => next(err));
};

const show = (req, res, next) => {
  Purchase.findById(req.params.id)
    .then(purchase => purchase ? res.json({ purchase }) : next())
    .catch(err => next(err));
};
