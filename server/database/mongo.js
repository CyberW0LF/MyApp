const mongoose = require("mongoose");

module.exports = {
  connect: async () => {
    try {
      const db = await mongoose.connect(
        process.env.MONGO_URL,
        { useNewUrlParser: true }
      );
    } catch (error) {
      new Error(error);
    }
  }
};
