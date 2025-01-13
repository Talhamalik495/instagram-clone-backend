import express from "express";
import bcrypt from "bcrypt";
import "dotenv/config";
import jwt from "jsonwebtoken";
import { register } from "./models/register.js";
export let router = express.Router();

router.post("/register", async (req, res) => {
  let obj = req.body;
  let dbUserCheck = await register.findOne({ email: obj.email });
  if (dbUserCheck) {
    return res.status(400).json({
      error: true,
      message: "User already registered",
      user: null,
    });
  }
  let saltRounds = 12;
  let hashedPassword = await bcrypt.hash(obj.password, saltRounds);
  obj.password = hashedPassword;

  let newUser = new register(obj);
  newUser = await newUser.save();
  res.status(200).json({
    error: false,
    message: "User registerd successfully",
    user: newUser,
  });
});

router.post("/login", async (req, res) => {
  let obj = req.body;

  let dbUser = await register.findOne({ email: obj.email });

  if (!dbUser) {
    return res.status(404).json({
      error: true,
      message: "User not found",
      user: null,
    });
  }

  let comparePassword = await bcrypt.compare(obj.password, dbUser.password);

  if (!comparePassword) {
    return res.status(400).json({
      error: true,
      message: "Input field is wrong",
      data: null,
    });
  }
  let token = jwt.sign(
    {
      user: dbUser,
    },
    process.env.AUTHSECRET
  );
  res.status(202).json({
    error: false,
    message: "User login successfully",
    user: dbUser,
    token: token,
  });
});
