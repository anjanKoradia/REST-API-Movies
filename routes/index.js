const createController = require("../controllers/createController");
const readController = require("../controllers/readController");
const updateController = require("../controllers/updateController");

function initRoute(app) {
  app.get("/movies", readController.index);

  app.post("/movies", createController.addMovie);

  app.put("/movies/:id", updateController.update);
  // app.put("/movies", updateController.update);
}

module.exports = initRoute;
