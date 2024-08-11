const User = require("../models/user.model");

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

// const userLogin = async (req, res, next) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     console.log("please enter valid email and password");
//     res.status(400).json({
//       success: false,
//       message: "Enter valid login credentials",
//     });
//   }

//   const user = User.findOne({ email }).select("+password");
//   if (!user) {
//     res.status(400).json({
//       success: false,
//       message: "Invalid email ",
//     });
//   }

//   const isPasswordMatch = (await user).comparePassward(password);
//   if (!isPasswordMatch) {
//     res.status(400).json({
//       success: false,
//       message: "Invalid password ",
//     });
//   }

//   sendToken(await user, 200, res);
// };

// const sendToken = (user, statusCode, res) => {
//   const accessToken = user.signAccessToken();

//   const accessTokenExpire = parseInt(
//     process.env.ACCESS_TOKEN_EXPIRE || "300",
//     10
//   );

//   const accessTokenOptions = {
//     expires: new Date(Date.now() + accessTokenExpire * 1000),
//     maxAge: accessTokenExpire * 1000,
//     httpOnly: true,
//     sameSite: "lax",
//   };

//   res.cookie("accessToken", accessToken, accessTokenOptions);
//   res.status(statusCode).json({
//     success: true,
//     user,
//     accessToken,
//   });
// };

// module.exports = { userRegister, userLogin };
module.exports = userRegister;
