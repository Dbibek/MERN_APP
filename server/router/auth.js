const express = require("express");
const { restart } = require("nodemon");
const router = express.Router();

require("../db/connnection");

const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("hello Contact world from router");
});

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill the field properly" });
  }

  try {
    const response = await User.findOne({ email: email });
    if (response) {
      return res.status(422).json({ error: "Email already exists" });
    }

    const user = new User({ name, email, phone, work, password, cpassword });

    await user.save();

    res.status(201).json({ message: "user registered successfully" });
  } catch (err) {
    console.log(err);
  }
});

//login route
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(422).json({ error: "Please fill all the field " });
    }
    const userLogin = await User.findOne({ email: email, password: password });
    if (!userLogin) {
      return res.status(422).json({ error: "Invalid Credentials" });
    } else {
      return res.status(200).json({ message: "Login successful" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
