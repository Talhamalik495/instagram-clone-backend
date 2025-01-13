import mongoose from "mongoose";
let { Schema, model } = mongoose;

let postSchema = new Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    image: { type: String, required: true },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    comments: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "user",
          required: true,
        },
        text: {
          type: String,
          required: true,
        },
        date: {
          type: Date,
          default: Date.now(),
        },
      },
    ],
    createdAt: { type: String, default: Date.now() },
    updatedAt: { type: String, default: Date.now() },
  },
  { timeStamps: true }
);

let Post = model("post", postSchema);
export default Post;
