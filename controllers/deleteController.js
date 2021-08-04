const fs = require("fs");
const Movie = require("../models/movie");
const CustomErrorHandler = require("../services/CustomErrorHandler");

const deleteController = {
  async delete(req, res, next) {
    const movie = await Movie.findOneAndRemove({ _id: req.params.id });

    if (!movie) {
      return next(new Error("Nothing to delete."));
    }

    const filePath = movie.image;

    fs.unlink(`${filePath}`, (err) => {
      if (err) {
        return next(CustomErrorHandler.serverError(err.message));
      }
    });

    res.json(movie);
  },
};

module.exports = deleteController;
