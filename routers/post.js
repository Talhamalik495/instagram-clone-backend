import express from "express";
import Joi from "joi";
let postRouter = express.Router();

postRouter.get("/",(req,res)=>{
    console.log("story get request");
})
