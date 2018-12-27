require("dotenv").config();
require("colors");

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();

require("./database/mongo").connect();

// Middlewares 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static("views"));

//Routes
app.use("/", require("./routes/main"));
app.use("/users", require("./routes/users"));

module.exports = app;
