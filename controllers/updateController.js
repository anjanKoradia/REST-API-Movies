const fs = require("fs");
const handleMultipartData = require("../config/multer");
const Movie = require("../models/movie");
const CustomErrorHandler = require("../services/CustomErrorHandler");

const updateController = {
  update(req, res, next) {
    handleMultipartData(req, res, async (err) => {
      if (err) {
        return next(CustomErrorHandler.serverError(err.message));
      }

      const oldImgPath = await Movie.findById(req.params.id);

      // path of image save in folder
      let filePath;
      if (req.file) {
        filePath = req.file.path;

        fs.unlink(`${oldImgPath.image}`, (err) => {
          if (err) {
            return next(CustomErrorHandler.serverError(err.message));
          }
        });
      }

      const { name, summary } = req.body;
      let document;
      try {
        document = await Movie.findOneAndUpdate(
          { _id: req.params.id },
          {
            ...(req.body.name && { name }),
            ...(req.body.summary && { summary }),
            ...(req.file && { image: filePath }),
          },
          { new: true }
        );
      } catch (err) {
        return next(err);
      }
      res.status(201).json(document);
    });
  },
};

module.exports = updateController;
