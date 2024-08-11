const express = require("express");
const userRegister = require("../controllers/user.controller");
// const userLogin = require("../controllers/user.controller");

const userRouter = express.Router();
userRouter.post("/register", userRegister);
// userRouter.post("/login", userLogin);

module.exports = userRouter;
