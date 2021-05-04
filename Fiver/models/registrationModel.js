const mongoose = require("mongoose");
require("dotenv").config();
var jwt = require("jsonwebtoken");

const registerSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: true },
    languages: { type: String, required: true },
    skills: { type: String, required: true },
    description: { type: String },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamp: true }
);

// How To Create A Token With jwt

registerSchema.methods.generateToken = async function () {
  try {
    const token = jwt.sign(
      { id: this._id.toString() },
      process.env.TOKEN_SECRET,
      { expiresIn: "10d" }
    );
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};

const Registration = mongoose.model("Registration", registerSchema);
module.exports = Registration;
