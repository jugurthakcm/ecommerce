require('dotenv').config();
const jwt = require('jsonwebtoken');

exports.auth = (req, res, next) => {
  const token = req.header('x-access-token');
  if (!token) return 'no token';

  const userId = jwt.verify(token, process.env.JWT_KEY);
  req.user = userId;
  next();
};
