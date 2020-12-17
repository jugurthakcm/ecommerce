const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  trending: {
    type: Boolean,
    default: false,
  },
});

exports.Item = mongoose.model('items', itemSchema);
