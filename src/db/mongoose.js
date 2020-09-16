const mongoose = require("mongoose");

//url and db name
mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});
