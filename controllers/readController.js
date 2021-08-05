const Movie = require("../models/movie");
const CustomErrorHandler = require("../services/CustomErrorHandler");

const readController = {
  async read(req, res, next) {
    let moviesList;

    try {
      moviesList = await Movie.find();
    } catch (error) {
      return next(CustomErrorHandler.serverError());
    }

    if (!moviesList) {
      return next(new Error("Database is empty."));
    }

    res.json(moviesList);
  },

  async readOne(req, res, next) {
    let movie;

    try {
      movie = await Movie.findById(req.params.id);
    } catch (error) {
      return next(CustomErrorHandler.serverError());
    }

    if (!movie) {
      return next(new Error("Movie with give id is not available."));
    }

    res.json(movie);
  },
};

module.exports = readController;
