const app = require("./app");
const { PORT = 3000, IP_ADDRESS } = process.env;

const msg =
  `\u2714 - Server running! \u25BA `.blue +
  `http://${IP_ADDRESS}:${PORT}`.magenta;

app.listen(PORT, err => console.log(err || msg));
