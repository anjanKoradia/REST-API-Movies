const Movie = require("../models/movie");

const readController = {
  async index(req, res, next) {
    const moviesList = await Movie.find();
    res.json(moviesList);
  },
};

module.exports = readController;
