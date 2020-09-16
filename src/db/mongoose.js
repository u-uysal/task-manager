//before run, make sure mongodb is still working

const mongoose = require("mongoose");
const validator = require("validator");

//url and db name
mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const Tasks = mongoose.model("Tasks", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const taskOne = new Tasks({
  name: "clean your room",
  completed: false,
});

taskOne
  .save()
  .then(() => {
    console.log(taskOne);
  })
  .catch((err) => {
    console.log(err);
  });
