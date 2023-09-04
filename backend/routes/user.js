const express = require("express");

const userRouter = express.Router();

const { loginUser, signUpUser } = require("../controllers/userController");

userRouter.post("/login", loginUser);
userRouter.post("/signup", signUpUser);

module.exports = userRouter;
