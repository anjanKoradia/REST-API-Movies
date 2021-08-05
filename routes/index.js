const express = require("express");
const router = express.Router();

const createController = require("../controllers/createController");
const deleteController = require("../controllers/deleteController");
const readController = require("../controllers/readController");
const updateController = require("../controllers/updateController");

// Read movies
router.get("/movies", readController.read);
router.get("/movies/:id", readController.readOne);

// Create movie
router.post("/movies", createController.addMovie);

// Update movie
router.put("/movies/:id", updateController.update);

// Delete movie
router.delete("/movies/:id", deleteController.delete);

module.exports = router;
