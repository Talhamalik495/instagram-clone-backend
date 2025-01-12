import express from "express";
import bcrypt from "bcrypt";
import { register } from "./models/register";
let router = express.Router();

router.post("/register", (req, res) => {
  let obj = req.body;
  let dbUserCheck = register.findOne({ email: obj.email });
  if (dbUserCheck) {
    res.send(400).json({
      error: true,
      meassage: "User already registered",
      user: null,
    });
    let saltRounds = 12;
    let hashedPassword = bcrypt.hash(obj.password, saltRounds);
    obj.password = hashedPassword;

    let newUser = new register(obj);
    newUser = newUser.save();
    res.send(200).json({
      error: false,
      meassage: "User registerd successfully",
      user: newUser,
    });
  }
  res.send("register api creacte");
});
