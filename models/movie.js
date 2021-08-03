const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  name: { type: String, require: true },
  summary: { type: String, require: true },
  image: { type: String, require: true },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
