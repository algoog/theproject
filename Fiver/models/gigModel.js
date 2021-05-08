const mongoose = require("mongoose");

const gigSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  role: { type: String, required: true },
  images: [
    {
      image: { type: String },
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Registration",
  },
});

const Gig = mongoose.model("Gig", gigSchema);
module.exports = Gig;
