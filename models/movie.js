const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    name: { type: String, require: true },
    image: {
      type: String,
      require: true,
      get: (image) => {
        // http://localhost:5000/uploads/1616443169266-52350494.png
        return `${process.env.APP_URL}/${image}`;
      },
    },
    summary: { type: String, require: true },
  },
  { toJSON: { getters: true }, id: false }
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
