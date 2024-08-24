const express = require("express");
const {
  userRegister,
  userLogin,
  getUserById,
} = require("../controllers/user.controller");
const { verifyToken } = require("../utils/jwt");

const userRouter = express.Router();
userRouter.post("/register", userRegister);
userRouter.post("/login", userLogin);
userRouter.get("/getUserById/:id", verifyToken, getUserById);

module.exports = userRouter;
