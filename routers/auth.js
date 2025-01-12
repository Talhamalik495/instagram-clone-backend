import express from "express";
let router = express.Router();

router.post("/register", (req, res) => {
  let obj = req.body;
  res.send("register api creacte");
});
