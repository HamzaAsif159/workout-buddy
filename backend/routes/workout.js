const express = require("express");
const {
  createWorkout,
  getAllWorkouts,
  getSingleWorkout,
  updateWorkout,
  deleteWorkout,
  deleteAllWorkouts,
} = require("../controllers/workoutController");
const requireAuth = require("../middleware/requireAuth");

const workoutRouter = express.Router();

// require auth for all workout routes
workoutRouter.use(requireAuth);

workoutRouter.get("/", getAllWorkouts);

workoutRouter.get("/:id", getSingleWorkout);

workoutRouter.post("/", createWorkout);

workoutRouter.patch("/:id", updateWorkout);

workoutRouter.delete("/:id", deleteWorkout);

workoutRouter.delete("/", deleteAllWorkouts);

module.exports = workoutRouter;
