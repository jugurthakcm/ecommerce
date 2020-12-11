const bcrypt = require('bcrypt');
const { User } = require('../models/User');
const { registerValidation } = require('../validation/userValidation');

exports.register = async (req, res) => {
  try {
    //Validation
    const { error, value } = registerValidation(req.body);
    if (error) throw error.details[0].message;

    const user = value;

    //Verify if email doesn't exist
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
      .catch((error) => res.status(400).json({ error }));
  } catch (error) {
    res.status(400).json({ error });
  }
};
