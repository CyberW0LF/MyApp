const mongoose = require("mongoose");

module.exports = {
  connect: async () => {
    const db = await mongoose.connect(
      process.env.MONGO_URL,
      { useNewUrlParser: true }
    );
  }
};
