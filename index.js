const express = require("express");
require("dotenv");

const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`You are listening on PORT:${PORT}`));
