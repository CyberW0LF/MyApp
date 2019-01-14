const mongoose = require("mongoose");

const MultimediaSchema = mongoose.Schema({
  laptop: Boolean,
  projector: Boolean,
  kabinet: String,
  startDate: Number,
  endDate: Number,
  mouse: Boolean,
  screen: Boolean,
  powerStrip: Boolean,
  remote: Boolean,
  speakers: Boolean,
  weekly: Boolean
});

module.exports = mongoose.model("Multimedia", MultimediaSchema);
