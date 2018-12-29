const mongoose = require("mongoose");

const { MONGO_URL } = process.env;
const options = {
  useNewUrlParser: true
};

module.exports = {
  connect: () => {
    mongoose
      .connect(
        MONGO_URL,
        options
      )
      .catch(err => console.log(err));
    mongoose.connection.on("connected", e => {
      const admin = new mongoose.mongo.Admin(mongoose.connection.db);
      admin.buildInfo((err, info) => {
        if (err) return console.log(err);
        console.log("МонгаДэБэ подключена! Версия: " + info.version);
      });
    });
  }
};
