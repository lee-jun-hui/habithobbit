const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user.model");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

const registerOneUser = async (username, email, password) => {
  let result = {
    status: null,
    message: null,
    data: null,
  };
  try {
    const userExists = await User.findOne({ email });
    //check for user
    if (userExists) {
      result.status = 400;
      result.message = "User already exists";
    }
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    //Create user
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    if (user) {
      result.status = 201;
      result.message = "User created successfully";
      result.data = user;
      result.token = generateToken(user._id);
    }
  } catch (error) {
    console.log(error);
    result.status = 400;
    result.message = error.message;
  }
  return result;
};

const loginOneUser = async (email, password) => {
  let result = {
    status: null,
    message: null,
    data: null,
  };
  try {
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      (result.status = 200), (result.message = "Login successfully");
      result.data = {
        _id: user.id,
        username: user.username,
        email: user.email,
      };
      result.token = generateToken(user._id);
    } else {
      result.status = 400;
      result.message = "Invalid Credentials";
    }
  } catch (error) {
    console.log(error);
    result.status = 400;
    result.message = error.message;
  }

  return result;
};

const getUserProfile = async (user) => {
  let result = {
    status: null,
    message: null,
    data: null,
  };
  try {
    const userProfile = await User.findById(user);

    result.status = 200;
    result.message = `Get user ${user} successfully`;
    result.data = userProfile;
  } catch (error) {
    console.log(error);
    result.status = 400;
    result.message = error.message;
  }
  return result;
};

module.exports = { registerOneUser, loginOneUser, getUserProfile };
