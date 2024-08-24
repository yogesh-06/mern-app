const User = require("../models/user.model");
const { sendToken } = require("../utils/jwt");

const userRegister = async (req, res, next) => {
  const { email } = req.body;

  const emailExists = await User.findOne({ email });

  if (emailExists) {
    const err = new Error("email already exists");
    err.statusCode = 400;
    res.status(400).json({
      success: false,
      message: "Email already exists!",
    });
  }

  const newUser = new User(req.body);
  try {
    const savedUser = await newUser.save();
    res.status(200).json({
      success: true,
      message: "User created successfully!",
      response: savedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const userLogin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    console.log("please enter valid email and password");
    res.status(400).json({
      success: false,
      message: "Enter valid login credentials",
    });
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    res.status(400).json({
      success: false,
      message: "Invalid email ",
    });
  }

  const isPasswordMatch = await user.comparePassword(password);

  if (!isPasswordMatch) {
    res.status(400).json({
      success: false,
      message: "Invalid password ",
    });
  }

  sendToken(await user, 200, res);
};

const getUserById = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) {
      res.status(400).json({
        success: false,
        message: "User not found.",
      });
    }
    res.status(200).json({
      success: true,
      response: user,
    });
  } catch (error) {
    console.log("===error===>", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

module.exports = { userRegister, userLogin, getUserById };
