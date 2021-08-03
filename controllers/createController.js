const fs = require("fs");
const Movie = require("../models/movie");
const movieSchema = require("../validator/movieValidator");
const handleMultipartData = require("../config/multer");
const CustomErrorHandler = require("../services/CustomErrorHandler");

const createController = {
  addMovie(req, res, next) {
    handleMultipartData(req, res, async (err) => {
      if (err) {
        return next(CustomErrorHandler.serverError(err.message));
      }

      // path of image save in folder
      let filePath;

      if (req.file) {
        filePath = req.file.path;
      } else {
        return next(`ValidationError: "image" is required`);
      }

      // validate req body using joi library
      const { error } = movieSchema.validate(req.body);

      // if error in validate
      if (error && filePath) {
        fs.unlink(`${appRoot}/${filePath}`, (err) => {
          if (err) {
            return next(CustomErrorHandler.serverError(err.message));
          }
        });
        return next(error);
      }

      const { name, summary } = req.body;
      let document;
      try {
        document = await Movie.create({
          movieName: name,
          summary,
          image: filePath,
        });
      } catch (err) {
        return next(err);
      }
      res.status(201).json(document);
    });
  },
};

module.exports = createController;
