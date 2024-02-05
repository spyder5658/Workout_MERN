const express = require("express");

const Workout = require("../models/workoutModel");
const {
  creatWorkout,
  getWorkout,
  getWorkouts,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();
//require auth for all workouts routes
router.use(requireAuth);

//Ger all the workouts
router.get("/", getWorkouts);

//Get single workout
router.get("/:id", getWorkout);

//Post a new workout
router.post("/", creatWorkout);

//Delete a workout
router.delete("/:id", deleteWorkout);

//Update a workout
router.patch("/:id", updateWorkout);

module.exports = router;
