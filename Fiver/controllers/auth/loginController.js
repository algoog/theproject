const Joi = require("joi");
const Registration = require("../../models/registrationModel");
const bcrypt = require("bcrypt");
const loginController = {
  async login(req, res, next) {
    // validation
    const loginSchema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
    });
    const { error } = loginSchema.validate(req.body);
    if (error) {
      return res.json({ error: error.message });
    }
    try {
      // Find the user
      const user = await Registration.findOne({ email: req.body.email });
      if (!user) {
        return res.status(404).json({ error: "404 Not Found" });
      }
      //   compare the password
      const match = await bcrypt.compare(req.body.password, user.password);
      if (!match) {
        return res.json({ error: "Password is incorrect" });
      }
      const token = await user.generateToken();
      await user.save();
      res.json({ token: token, user_Id: user.id });
    } catch (error) {
      res.json({ error: error.message });
    }
  },

  async logout(req, res, next) {
    req.user.tokens = [];
    await req.user.save();
    res.json({ success: "your are logout now" });
  },
};

module.exports = loginController;
