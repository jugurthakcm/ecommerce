const express = require('express');
const router = express.Router();
const {
  addItem,
  getItems,
  getOneItem,
  trendingItems,
  categoryItems,
} = require('../controllers/itemController');

router.post('/', addItem);
router.get('/', getItems);
router.get('/trending', trendingItems);
router.get('/:id', getOneItem);
router.get('/category/:category', categoryItems);

module.exports = router;
