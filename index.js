import express from "express";
let app = express();
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
app.use(express.json());
app.use(cors("*"));

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req, res) => {
  res.send("Get request called");
});
app.listen(process.env.PORT, () => {
  console.log("server is runing on port " + process.env.PORT);
});
