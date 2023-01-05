const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 6,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      min: 6,
    },
    comments: {
      type: mongoose.Schema.ObjectId,
      ref: "Comment",
    },
    role: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const commentSchema = new mongoose.Schema(
  {
    username: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    content: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);
let User = mongoose.model("User", userSchema);
let Comment = mongoose.model("Comment", commentSchema);
module.exports = { User, Comment };
