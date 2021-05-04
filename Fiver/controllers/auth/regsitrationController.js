const Joi = require("joi");
const Registration = require("../../models/registrationModel");
const bcrypt = require("bcrypt");
const registrationController = {
  async register(req, res, next) {
    // validation
    const registerSchema = Joi.object({
      firstname: Joi.string().min(3).max(30).required(),
      lastname: Joi.string().min(3).max(30).required(),
      username: Joi.string().min(3).max(30).required(),
      email: Joi.string().email().required(),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
      languages: Joi.string().required(),
      skills: Joi.string().required(),
      description: Joi.string(),
    });
    const { error } = registerSchema.validate(req.body);
    if (error) {
      return res.json({ error: error.message });
    }
    // if user already exists
    try {
      const exist = await Registration.exists({ email: req.body.email });
      if (exist) {
        return res.json({ error: "This Email is already Exists" });
      }
    } catch (error) {
      return res.json({ error: error.message });
    }
    const {
      firstname,
      lastname,
      username,
      email,
      password,
      languages,
      skills,
      description,
    } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    try {
      // prepare models
      const register = new Registration({
        firstname,
        lastname,
        username,
        email,
        password: hashPassword,
        languages,
        skills,
        description,
      });
      // Set Token
      const token = await register.generateToken();
      const user = await register.save();
      res.status(201).json(user);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
};

module.exports = registrationController;
