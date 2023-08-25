const mongoose = require("mongoose");

const workSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Work", workSchema);
