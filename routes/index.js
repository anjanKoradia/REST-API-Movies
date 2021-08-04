const createController = require("../controllers/createController");
const deleteController = require("../controllers/deleteController");
const readController = require("../controllers/readController");
const updateController = require("../controllers/updateController");

function initRoute(app) {
  // Read movies
  app.get("/movies", readController.read);
  app.get("/movies/:id", readController.readOne);

  // Create movie
  app.post("/movies", createController.addMovie);

  // Update movie
  app.put("/movies/:id", updateController.update);

  // Delete movie
  app.delete("/movies/:id", deleteController.delete);
}

module.exports = initRoute;
