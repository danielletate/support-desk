const express = require("express");
const dotenv = require("dotenv");

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  res.json({ message: 'welcome'});
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
