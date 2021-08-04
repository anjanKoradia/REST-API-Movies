const createController = require("../controllers/createController");
const readController = require("../controllers/readController");
const updateController = require("../controllers/updateController");

function initRoute(app) {
  app.get("/movies", readController.read);
  app.get("/movies/:id", readController.readOne);

  app.post("/movies", createController.addMovie);

  app.put("/movies/:id", updateController.update);
}

module.exports = initRoute;
