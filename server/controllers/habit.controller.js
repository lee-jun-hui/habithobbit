const express = require("express");

const {
  getAllHabits,
  createOneHabit,
  updateOneHabit,
  deleteOneHabit,
} = require("../services/habit.services");

// @desc Get all habits of a user
// @route GET /api/v1/habits
// @acess Private

const getHabits = async (req, res) => {
  const user = req.user.id;
  const result = await getAllHabits(user);
  res.status(result.status).json(result);
};

// @desc Set a habit
// @route POST /api/v1/habits
// @acess Private

const setHabit = async (req, res) => {
  const user = req.user.id;
  const { name, description, frequency, endDate } = req.body;

  if (!name || !frequency || !endDate) {
    res
      .status(400)
      .json({ message: "Name,Frequency and End Date cannot be empty" });
  } else {
    const result = await createOneHabit(
      user,
      name,
      description,
      frequency,
      endDate
    );

    if (result.status === 200) {
      res.status(result.status).json(result);
    } else {
      res.status(result.status);
      throw new Error(result.message);
    }
  }
};

// @desc Update a habit
// @route PUT /api/v1/habits/:id
// @acess Private

const updateHabit = async (req, res) => {
  const habitId = req.params.id;
  const userId = req.user.id;
  const body = req.body;

  const result = await updateOneHabit(habitId, userId, body);

  if (result.status === 200) {
    res.status(result.status).json(result);
  } else {
    res.status(result.status);
    throw new Error(result.message);
  }
};

// @desc Delete a habit
// @route DELETE /api/v1/habits/:id
// @acess Private

const deleteHabit = async (req, res) => {
  const habitId = req.params.id;
  const userId = req.user.id;

  const result = await deleteOneHabit(habitId, userId);

  if (result.status === 200) {
    res.status(result.status).json(result);
  } else {
    res.status(result.status);
    throw new Error(result.message);
  }
};

module.exports = {
  getHabits,
  setHabit,
  updateHabit,
  deleteHabit,
};
