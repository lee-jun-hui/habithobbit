const Habit = require("../models/habit.model");
const User = require("../models/user.model");

const getAllHabits = async (user) => {
  let result = {
    status: null,
    message: null,
    data: null,
  };
  try {
    const habits = await Habit.find({ user });
    result.status = 200;
    result.message = `Get habits of user ${user} successfully!`;
    result.data = habits;

    return result;
  } catch (error) {
    console.log(error);
    result.status = 400;
    result.message = error.message;
    return result;
  }
};

const createOneHabit = async (user, name, description, frequency, endDate) => {
  let result = {
    status: null,
    message: null,
    data: null,
  };
  try {
    const habit = await Habit.create({
      user,
      name,
      description,
      frequency,
      endDate,
    });
    if (habit) {
      result.status = 200;
      result.message = "Habit created successfully";
      result.data = habit;
    } else {
      result.status = 400;
      result.message = "Unable to create habit. Please try again";
    }
  } catch (error) {
    console.log(error);
    result.status = 400;
    result.message = error.message;
  }
  return result;
};

const updateOneHabit = async (habitId, userId, body) => {
  let result = {
    status: null,
    message: null,
    data: null,
  };
  try {
    const habit = await Habit.findById(habitId);
    //check for habit
    if (!habit) {
      result.status = 400;
      result.message = "Habit not found!";
    }

    const user = await User.findById(userId);
    //check for user
    if (!user) {
      result.status = 401;
      result.message = "User not found!";
    }
    //check habit user matches login user
    if (habit.user.toString() !== userId) {
      result.status = 401;
      result.message = "User not authorized";
    }
    const updateHabit = await Habit.findByIdAndUpdate(habitId, body, {
      new: true,
    });
    result.status = 200;
    result.message = `Habit ${habitId} updated successfully`;
    result.data = updateHabit;
  } catch (error) {
    console.log(error);
    result.status = 400;
    result.message = error.message;
    return result;
  }
  return result;
};

const deleteOneHabit = async (habitId, userId) => {
  let result = {
    status: null,
    message: null,
    data: null,
  };
  const habit = await Habit.findById(habitId);
  //check for habit
  if (!habit) {
    result.status = 400;
    result.message = "Habit not found!";
  }

  const user = await User.findById(userId);
  //check for user
  if (!user) {
    result.status = 401;
    result.message = "User not found!";
  }
  //check habit user matches login user
  if (habit.user.toString() !== user.id) {
    result.status = 401;
    result.message = "User not authorized";
  }
  await habit.remove();
  (result.status = 200),
    (result.message = `Habit ${habitId} deleted successfully`);
  try {
  } catch (error) {
    console.log(error);
    result.status = 400;
    result.message = error.message;
    return result;
  }
  return result;
};

module.exports = {
  getAllHabits,
  createOneHabit,
  updateOneHabit,
  deleteOneHabit,
};
