require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models/User');
const {
  registerValidation,
  loginValidation,
} = require('../validation/userValidation');

exports.register = async (req, res) => {
  try {
    //Validation
    const { error, value } = registerValidation(req.body);
    if (error) throw error.details[0].message;

    const user = value;

    //Verify if user exists
    const userExists = await User.findOne({ email: user.email });
    if (userExists) throw 'Email already exists';

    //Crypt password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);

    //Add the user to the DB
    User.create({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: hash,
    })
      .then((data) =>
        res
          .status(200)
          .send(`${data.firstName} ${data.lastName} is registred successfully`)
      )
      .catch((error) => {
        throw error;
      });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.login = async (req, res) => {
  try {
    //Validation
    const { error, value } = loginValidation(req.body);
    if (error) throw error.details[0].message;

    const user = value;

    //Verify is user exists
    const userDB = await User.findOne({ email: user.email });
    if (!userDB) throw "Email doesn't exist";

    //Decrypt password
    const comparePassword = await bcrypt.compare(
      user.password,
      userDB.password
    );
    if (!comparePassword) throw 'Wrong password';

    const token = jwt.sign({ _id: userDB._id }, process.env.JWT_KEY);

    res.header('x-access-token', token);

    User.findById({ _id: userDB._id })
      .then((user) =>
        res.status(200).json({
          name: `${user.firstName} ${user.lastName}`,
          token,
        })
      )
      .catch((err) => {
        throw err;
      });
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.logout = async (req, res) => {
  try {
    const token = req.headers['x-access-token'];
    if (!token) throw "You can't logout if you aren't signed in";

    res.header('x-access-token', null);
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.loadUser = (req, res) => {
  User.findById(req.user._id)
    .select('-password -__v')
    .then((user) => res.status(200).send(user))
    .catch((error) => res.status(400).json({ error }));
};
