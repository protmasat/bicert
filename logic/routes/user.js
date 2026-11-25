const express = require("express");
const { Register, Login } = require("../controllers/user");
const RequireBody = require("../middleware/RequireBod");
const userRouter = express.Router();

userRouter.post("/signup", RequireBody, Register);
userRouter.post("/login", RequireBody, Login);

module.exports = userRouter;
