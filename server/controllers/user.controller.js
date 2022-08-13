const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const User = require("../models/user.model");

const {
  registerOneUser,
  loginOneUser,
  getUserProfile,
} = require("../services/user.services");

// @desc Register new user
// @route POST  /api/v1/users
// @access Public

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please enter all fields");
  }
  const result = await registerOneUser(username, email, password);

  if (result.status === 201) {
    res.status(result.status).json({
      message: result.message,
      token: result.token,
      data: result.data,
    });
  } else {
    res.status(result.status);
    throw new Error(result.message);
  }
};

// @desc Authenticate a user
// @route POST  /api/v1/users/login
// @access Public

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const result = await loginOneUser(email, password);
  if (result.status === 200) {
    res.status(result.status).json({
      message: result.message,
      token: result.token,
      data: result.data,
    });
  } else {
    res.status(result.status);
    throw new Error(result.message);
  }
};

// @desc Get user data
// @route GET  /api/v1/users/profile
// @access Private

const getProfile = async (req, res) => {
  const user = req.user.id;
  const result = await getUserProfile(user);
  if (result.status === 200) {
    res.status(result.status).json({
      message: result.message,
      token: result.token,
      data: result.data,
    });
  } else {
    res.status(result.status);
    throw new Error(result.message);
  }
};

module.exports = {
  registerUser,
  loginUser,
  getProfile,
};
