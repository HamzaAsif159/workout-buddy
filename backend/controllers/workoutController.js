const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

const getAllWorkouts = async (req, res) => {
  try {
    const user_id = req.user._id;
    const workouts = await Workout.find({ user_id }).sort({ createdAt: -1 });
    res.status(200).send(workouts);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getSingleWorkout = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send("No such workouts");
    }

    const workout = await Workout.findById(id);
    res.status(200).send(workout);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const createWorkout = async (req, res) => {
  const { title, reps, load, _id } = req.body;

  let emptyFields = [];

  if (!title) emptyFields.push("Title");
  if (!reps) emptyFields.push("Reps");
  if (!load) emptyFields.push("Load");

  if (emptyFields.length > 0)
    return res
      .status(400)
      .json({ error: "Please fill out in all the fields", emptyFields });

  try {
    const user_id = req.user._id;
    let workout = await Workout.create({ title, reps, load, user_id });

    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send("No such workouts");
  }

  try {
    let workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body });
    res.status(200).send(workout);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send("No such workouts");
  }

  try {
    let workout = await Workout.findOneAndDelete({ _id: id });
    res.status(200).send(workout);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteAllWorkouts = async (req, res) => {
  try {
    let workout = await Workout.deleteMany({});
    res.status(200).send(workout);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  createWorkout,
  getAllWorkouts,
  getSingleWorkout,
  updateWorkout,
  deleteWorkout,
  deleteAllWorkouts,
};
