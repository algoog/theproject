const mongoose = require("mongoose");

const gigSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    role: { type: String, required: true },
    images: [
      {
        image: {
          type: String,
          get: (image) => {
            return `http://localhost:4000/${image}`;
          },
        },
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Registration",
    },
  },
  { timestamps: true, toJSON: { getters: true } }
);

const Gig = mongoose.model("Gig", gigSchema);
module.exports = Gig;
