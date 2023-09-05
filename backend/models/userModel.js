const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// static signup method
userSchema.statics.signup = async function (email, password) {
  if (!email || !password) throw new Error("All fields must be filled");
  if (!validator.isEmail(email)) throw new Error("Not a valid email");
  if (!validator.isStrongPassword(password))
    throw new Error("Not a strong password");

  const exists = await this.findOne({ email });

  if (exists) {
    throw new Error("Email is already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });

  return user;
};

// static login method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) throw new Error("All fields must be filled");

  const user = await this.findOne({ email });

  if (!user) {
    throw new Error("User not found.");
  }

  const match = bcrypt.compare(password, user.password);

  if (!match) throw new Error("Invalid password");

  return user;
};

module.exports = mongoose.model("user", userSchema);
