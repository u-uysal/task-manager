const mongoose = require("mongoose");

// add explicitly user schema

const taskSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true, // add timestaps to see when the task created
  }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
