import express from "express";
let app = express();
import "dotenv/config";
import cors from "cors";
app.use(express.json());
app.use(cors("*"));
app.get("/", (req, res) => {
  res.send("Get request called");
});
app.listen(process.env.PORT, () => {
  console.log("server is runing on port " + process.env.PORT);
});
