"use strict";

var mongoose = require("mongoose");

var TaskSchema = new mongoose.Schema(
  {
    taskName: {
      type: String,
      required: [true, "please add a taskname"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("tasks", TaskSchema);
