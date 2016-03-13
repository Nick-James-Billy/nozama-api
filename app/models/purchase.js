'use strict';

const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  items: Array,
  _userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false
},
}, {
  timestamps: true,
});


const Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = Purchase;
