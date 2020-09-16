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
  },
  completed: {
    type: Boolean,
  },
});

const taskOne = new Tasks({
  name: "clean your room",
  completed: false,
});

taskOne
  .save()
  .then(() => {
    console.log(taskOne); //{ _id: 5f61ea8ef88abb295b7948ca,  name: 'clean your room',completed: false,v: 0 }
  })
  .catch((err) => {
    console.log(err);
  });
