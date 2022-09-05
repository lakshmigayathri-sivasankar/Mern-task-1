const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema(
  {
    taskID: {
      type: mongoose.Schema.Types.ObjectId,
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
    emailid: {
      type: String,
      required: [true, "Please add a emailid field"],
    },
    status: {
      type: String,
      required: [true, "Please add a status field"],
      default: "active",
    },
    dob: {
      type: Date,
      required: [true, "Please add a dob field"],
    },
    doj: {
      type: Date,
      required: [true, "Please add a doj field"],
    },
    contactno: {
      type: Number,
      required: [true, "Please add a contactno field"],
    },
    role: {
      type: String,
      required: [true, "Please add a role field"],
    },
    worklogBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "employees",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Goal", EmployeeSchema);
