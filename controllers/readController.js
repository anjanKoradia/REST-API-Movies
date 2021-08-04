const Movie = require("../models/movie");

const readController = {
  async read(req, res, next) {
    const moviesList = await Movie.find();
    res.json(moviesList);
  },

  async readOne(req, res, next) {
    const moviesList = await Movie.findById(req.params.id);
    res.json(moviesList);
  },
};

module.exports = readController;
