const express = require("express")
const router = express.Router()
const Workout = require("../models/workoutModel")
const {creatWorkout,getWorkout,getWorkouts,updateWorkout,deleteWorkout}= require("../controllers/workoutController")

//Ger all the workouts
router.get('/',getWorkouts)

//Get single workout
router.get("/:id",getWorkout)

//Post a new workout
router.post("/", creatWorkout)

//Delete a workout
router.delete("/:id",deleteWorkout)

//Update a workout
router.patch("/:id",updateWorkout)

module.exports= router