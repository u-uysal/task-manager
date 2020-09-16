const mongoose = require("mongoose");
const validator = require("validator");
const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("Password can not contain 'password' ");
      }
    },
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  age: {
    type: Number,
    default: 0, // in case user did not enter age
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a postive number");
      }
    },
  },
});

const me = new User({
  name: "ufuk",
  age: 28,
});

me.save()
  .then(() => {
    console.log(me);
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = User;
