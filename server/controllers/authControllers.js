const User = require("../models/user");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/generateToken");

// @POST
// Register
exports.registerController = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    const findEmail = await User.exists({ email });

    if (findEmail) {
      return res.status(402).send("Email already exist");
    }

    const encryptPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      password: encryptPassword,
      email: email.toLowerCase(),
    });

    // create token
    res.status(201).json({
      userDetails: {
        email: user.email,
        username: user.username,
        password: user.password,
        token: generateToken(user._id),
      },
    });
  } catch (error) {
    return res.status(500).send("Error occured.Please try again");
  }
};

// @POST
// Login
exports.loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(402).send("Email Not Found");
    }

    if (user && bcrypt.compare(password, user.password)) {
      // create token
      res.status(201).json({
        userDetails: {
          email: user.email,
          username: user.username,
          token: generateToken(user._id),
        },
      });
    }
    return res.status(400).send("Invalid Credentials");
  } catch (error) {
    return res.status(500).send("Error occured.Please try again");
  }
};
