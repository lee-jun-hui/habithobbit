const asyncHandler = require("express-async-handler");
const Habit = require("../models/habit.model");

// @desc GET HABITS
// @route GET /api/v1/habits
// @acess Private

const getHabits = asyncHandler(async (req, res) => {
  const habits = await Habit.find();
  res.status(200).json(habits);
});

// @desc SET HABIT
// @route POST /api/v1/habits
// @acess Private

const setHabit = asyncHandler(async (req, res) => {
  console.log(req.body);
  if (req.body.name.length < 1) {
    res.status(400);
    throw new Error("please add a habit name");
  }
  const habit = await Habit.create({
    name: req.body.name,
    description: req.body.description,
    frequency: req.body.frequency,
    endDate: req.body.endDate,
  });
  res.status(200).json(habit);
});

// @desc DELETE HABIT
// @route DELETE /api/v1/habits/:id
// @acess Private

const deleteHabit = asyncHandler(async (req, res) => {
  const habit = await Habit.findById(req.params.id);
  if (!habit) {
    res.status(400);
    throw new Error("Habit not found");
  }
  await habit.remove();
  res.status(200).json({ message: `DELETE habit ${req.params.id}` });
});

// @desc UPDATE HABIT
// @route PUT /api/v1/habits/:id
// @acess Private

const updateHabit = asyncHandler(async (req, res) => {
  const habit = await Habit.findById(req.params.id);
  if (!habit) {
    res.status(400);
    throw new Error("Habit not found!");
  }
  const updateHabit = await Habit.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updateHabit);
});

module.exports = {
  getHabits,
  setHabit,
  updateHabit,
  deleteHabit,
};
