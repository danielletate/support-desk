const express = require("express");
const dotenv = require("dotenv");

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ Message: "welcome to the Support Desk API" });
});

// Routes
app.use("/api/users", require("./routes/userRoutes"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
