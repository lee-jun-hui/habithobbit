const asyncHandler = require("express-async-handler");

// @desc GET HABITS
// @route GET /api/v1/habits
// @acess Private

const getHabits = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "GET habits" });
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
  res.status(200).json({ message: "SET habits" });
});

// @desc DELETE HABIT
// @route DELETE /api/v1/habits/:id
// @acess Private

const deleteHabit = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `DELETE habit ${req.params.id}` });
});

// @desc UPDATE HABIT
// @route PUT /api/v1/habits/:id
// @acess Private

const updateHabit = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `UPDATE habit ${req.params.id}` });
});

module.exports = {
  getHabits,
  setHabit,
  updateHabit,
  deleteHabit,
};
