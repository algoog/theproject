const Registration = require("../../models/registrationModel");
const showController = {
  async show(req, res, next) {
    try {
      const response = await Registration.findById({
        _id: req.params.id,
      }).select("-password -tokens -__v");
      if (!response) {
        res.status(404).json({ error: "Not Found" });
      }
      res.status(200).json(response);
    } catch (error) {
      res.json({ error: error });
    }
  },
};

module.exports = showController;
