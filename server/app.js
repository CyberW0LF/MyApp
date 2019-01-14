require("dotenv").config();
require("colors");

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

require("./database/mongo").connect();

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());

app.set("views", path.join(__dirname, "../client/build"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use(express.static(path.join(__dirname, "../client/build")));

//Routes
app.use("/", require("./routes/main"));
app.use("/users", require("./routes/users"));
app.use("/api", require("./routes/api"));

module.exports = app;
