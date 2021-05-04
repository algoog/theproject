const jwt = require("jsonwebtoken");
const Registration = require("../models/registrationModel");
require("dotenv").config();

const auth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.json({ error: "Unauthorized" });
    }
    const token = authHeader.split(" ")[1];
    const verifiedUser = await jwt.verify(token, process.env.TOKEN_SECRET);
    const user = await Registration.findOne({ _id: verifiedUser.id });
    console.log(user);
    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    res.send(error);
  }
};

module.exports = auth;
