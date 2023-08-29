const express = require("express");

const workoutRouter = express.Router();

workoutRouter.get("/", (req, res, next) => {
  console.log(res.json({ msg: "Get all workouts" }));
});

workoutRouter.get("/:id", (req, res, next) => {
  console.log(res.json({ msg: "Get a single workout" }));
});

workoutRouter.post("/:id", (req, res, next) => {
  console.log(res.json({ msg: "Post a single workout" }));
});

workoutRouter.patch("/:id", (req, res, next) => {
  console.log(res.json({ msg: "Update a single workout" }));
});

workoutRouter.delete("/:id", (req, res, next) => {
  console.log(res.json({ msg: "Delete a single workout" }));
});

workoutRouter.delete("/", (req, res, next) => {
  console.log(res.json({ msg: "Delete all workouts" }));
});

module.exports = workoutRouter;
