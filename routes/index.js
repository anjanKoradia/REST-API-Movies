const createController = require("../controllers/createController");
const readController = require("../controllers/readController");

function initRoute(app) {
  app.get("/movies", readController.index);

  app.post("/movies", createController.addMovie);
}

module.exports = initRoute;
