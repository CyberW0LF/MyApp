const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(
    "<h3>Ура, Работает!</h3> <img src='http://animated.name/uploads/posts/2016-08/1471201938_602.gif' />"
  );
});

app.listen(3000, _ => console.log("http://localhost:3000"));
