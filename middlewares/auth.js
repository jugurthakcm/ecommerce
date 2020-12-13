require('dotenv').config();
const jwt = require('jsonwebtoken');

exports.auth = (req, res, next) => {
  try {
    const token = req.header('x-access-token');

    if (!token) throw 'no token';

    const userId = jwt.verify(token, process.env.JWT_KEY);
    req.user = userId;
    next();
  } catch (error) {
    res.status(400).send(error);
    next();
  }
};
