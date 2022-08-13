const mongoose = require("mongoose");

const habitSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name value"],
    },
    description: {
      type: String,
    },
    frequency: {
      type: String,
    },
    endDate: {
      type: Date,
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Habit", habitSchema);
