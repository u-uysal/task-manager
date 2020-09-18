const mongoose = require("mongoose");
const validator = require("validator");
const bycrpt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
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
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error('Password cannot contain "password"');
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a postive number");
      }
    },
  },
});

/* userSchema.pre() === doing sth before an event like before validation or before saving */

/* userSchema.post() === doing sth after an event like after validation or after saving */

// first arg is name of the event and other function which is we want to implement
// we did not use arrow function because binding has a important role.
userSchema.pre("save", async function (next) {
  const user = this; // value which is equal to the that's being saved

  if (user.isModified("password")) {
    user.password = await bycrpt.hash(user.password, 8); // 8 times will be bcrypted
  }

  next(); // specify our work is done
});

const User = mongoose.model("User", userSchema);

module.exports = User;
