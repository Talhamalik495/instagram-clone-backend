import mongoose from "mongoose";

let { Schema, model } = mongoose;
let registerSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const Register = model("users", registerSchema);
export default Register;
