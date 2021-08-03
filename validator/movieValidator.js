const Joi = require("joi");

const movieSchema = Joi.object({
  name: Joi.string().required(),
  summary: Joi.string().required(),
  image: Joi.string().required(),
});

module.exports = movieSchema;
