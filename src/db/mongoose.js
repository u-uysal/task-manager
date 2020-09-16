//before run, make sure mongodb is still working

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

const me = new User({
  name: "ufuk",
  age: 28,
});

me.save()
  .then(() => {
    console.log(me); //{ _id: 5f61e8d4956fcf27934f9f9a, name: 'ufuk', age: 28, __v: 0 }
  })
  .catch((err) => {
    console.log(err);
  });
