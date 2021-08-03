const createController = require("../controllers/createController");

function initRoute(app) {
  // app.get("/movies", movieController.getMovies);

  app.post("/movies", createController.addMovie);
}

module.exports = initRoute;
