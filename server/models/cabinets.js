const mongoose = require("mongoose");

const CabinetSchema = mongoose.Schema({
  name: String
});

module.exports = mongoose.model("Cabinet", CabinetSchema);
