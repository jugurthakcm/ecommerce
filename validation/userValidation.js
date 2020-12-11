const Joi = require('joi');

exports.registerValidation = ({ firstName, lastName, email, password }) => {
  const schema = Joi.object({
    firstName: Joi.string().required().trim().min(1).max(50),
    lastName: Joi.string().required().trim().min(1).max(50),
    email: Joi.string().email().required().trim().max(50),
    password: Joi.string().required().trim().min(8).max(50),
  });

  return schema.validate({
    firstName,
    lastName,
    email,
    password,
  });
};
