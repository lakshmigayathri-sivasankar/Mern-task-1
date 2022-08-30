const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add a text field"],
    },
    username: {
      type: String,
      required: [true, "Please add a username field"],
    },
    password: {
      type: String,
      required: [true, "Please add a password field"],
    },
    firstname: {
      type: String,
      required: [true, "Please add a firstname field"],
    },
    lastname: {
      type: String,
      required: [true, "Please add a lastname field"],
    },
    dob: {
      type: Date,
      required: [true, "Please add a dob field"],
    },
    doj: {
      type: Date,
      required: [true, "Please add a doj field"],
    },
    status: {
      type: String,
      required: [true, "Please add a status field"],
    },
    emailid: {
      type: String,
      required: [true, "Please add a emailid field"],
    },
    contactno: {
      type: Number,
      required: [true, "Please add a contactno field"],
    },
    role: {
      type: String,
      required: [true, "Please add a role field"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Goal", goalSchema);
