const express = require("express");
const router = express.Router();

// This is where we will import the controllers we will root.
const tripsController = require("../controllers/trips");

// Define route for the trips endpoint
router
    .route("/trips")
    .get(tripsController.tripsList) // GET method routes triplist
    .post(tripsController.tripsAddTrip); // POST Method adds a Trip

// GET method routes tripFindByCode - requries parameter
router
    .route("/trips/:tripCode")
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);

module.exports = router;
