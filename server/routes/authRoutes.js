const express = require("express");
const Joi = require("joi");
const {
  registerController,
  loginController,
} = require("../controllers/authControllers");
const validator = require("express-joi-validation").createValidator({});

const router = express.Router();

const registerSchema = Joi.object({
  username: Joi.string().min(3).max(12).required(),
  password: Joi.string().min(3).max(12).required(),
  email: Joi.string().email().required(),
});

const loginSchema = Joi.object({
  password: Joi.string().min(3).max(12).required(),
  email: Joi.string().email().required(),
});

router.post("/register", validator.body(registerSchema), registerController);
router.post("/login", validator.body(loginSchema), loginController);

module.exports = router;
