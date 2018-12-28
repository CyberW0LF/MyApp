const JWT = require("jsonwebtoken");
const User = require("../models/users");
const bcrypt = require("bcryptjs");

const getToken = user => JWT.sign({ id: user.id }, process.env.JWT_SECRET);

module.exports = {
  signUp: async (req, res) => {
    const { email, password } = req.value.body;
    try {
      const findUser = await User.findOne({ email });
      if (findUser) {
        return res
          .status(400)
          .json({ success: false, message: "This email existing" });
      }
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);
      const newUser = new User({ email, password: hashPassword });
      await newUser.save();
      res.status(200).json({
        success: true,
        message: "successfuly registration",
        token: getToken(newUser)
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error });
    }
  },
  signIn: async (req, res) => {
    const { email, password } = req.value.body;
    try {
      const user = await User.findOne({ email });
      const compare = await bcrypt.compare(password, user.password);
      if (!compare)
        return res
          .send(400)
          .json({ success: false, message: "password is incorrect" });
      return res.send(getToken(user));
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  },
  secret: (req, res) => {
    res.send("secret");
  }
};
