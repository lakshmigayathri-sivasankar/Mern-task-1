const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const EmployeeSchema = new mongoose.Schema(
  {
    empRollno: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: [true, "Please add a username field"],
    },
    emailId: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: [true, "Please add a firstname field"],
    },
    lastname: {
      type: String,
      required: [true, "Please add a lastname field"],
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
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Goal",
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Goal",
    },
  },
  {
    timestamps: true,
  }
);
EmployeeSchema.methods.getSignedJWTToken = function () {
  return jwt.sign(
    {
      id: this._id,
    },
    "lakshmigayathri",
    { expiresIn: "1h" }
  );
};

module.exports = mongoose.model("Goal", EmployeeSchema);
