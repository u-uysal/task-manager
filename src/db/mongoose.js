//before run, make sure mongodb is still working

const mongoose = require("mongoose");

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
