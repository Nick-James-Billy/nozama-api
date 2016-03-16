'use strict';

const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    maxlength: 300
  },
  imageLocation: String
}, {
  timestamps: true,
  toObject: {virtuals: true},
  toJSON: {virtuals: true}

});

itemSchema.virtual('normalized').get(function () {
  return this.name.replace(' ', '').toLowerCase();
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
