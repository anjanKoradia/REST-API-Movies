const Movie = require("../models/movie");

const readController = {
  async read(req, res, next) {
    const moviesList = await Movie.find();

    if (!moviesList) {
      return next(new Error("Database is empty."));
    }

    res.json(moviesList);
  },

  async readOne(req, res, next) {
    const movie = await Movie.findById(req.params.id);

    if (!movie) {
      return next(new Error("Movie with give id is not available."));
    }

    res.json(movie);
  },
};

module.exports = readController;
