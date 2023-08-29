const express = require("express");
const {
  createWorkout,
  getAllWorkouts,
  getSingleWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");

const workoutRouter = express.Router();

workoutRouter.get("/", getAllWorkouts);

workoutRouter.get("/:id", getSingleWorkout);

workoutRouter.post("/", createWorkout);

workoutRouter.patch("/:id", updateWorkout);

workoutRouter.delete("/:id", deleteWorkout);

workoutRouter.delete("/", (req, res, next) => {
  console.log(res.json({ msg: "Delete all workouts" }));
});

module.exports = workoutRouter;
