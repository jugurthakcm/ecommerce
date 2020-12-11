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
    type: URL,
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
});

exports.Item = mongoose.model('items', itemSchema);
