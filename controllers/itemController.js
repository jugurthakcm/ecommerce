const { Item } = require('../models/Item');
const randomBoolean = require('random-boolean');

exports.addItem = (req, res) => {
  const { title, description, price, category, image } = req.body;
  const newItem = new Item({
    title,
    description,
    price,
    category: category.trim().split(' ').join('_'),
    image,
    inStock: Math.floor(Math.random() * 100) + 1,
    trending: randomBoolean(),
  });

  newItem
    .save()
    .then(() => res.status(200).send('items saved in the db'))
    .catch((err) => res.status(400).send(err));
};

exports.getItems = async (req, res) => {
  try {
    const Items = await Item.find({});
    res.status(200).send(Items);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getOneItem = async (req, res) => {
  try {
    const item = await Item.findOne({ _id: req.params.id });
    res.status(200).send(item);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.trendingItems = async (req, res) => {
  try {
    const items = await Item.find({ trending: true });
    res.status(200).send(items);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.categoryItems = async (req, res) => {
  try {
    const items = await Item.find({ category: req.params.category });
    res.status(200).send(items);
  } catch (error) {
    res.status(400).send(error);
  }
};
