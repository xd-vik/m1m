const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const allowedOrigin = process.env.ORIGIN || "*";
const DB_URI = process.env.DB_URI;

app.use(
  cors({
    origin: allowedOrigin,
  })
);

app.use(express.json());

app.use("/", (req, res) => {
  res.json({ success: true, message: "Backend is live from vercel" });
});

app.use("/test", (req, res) => {
  res.json({ message: "Test Api hits" });
});

mongoose
  .connect(DB_URI)
  .then(() => console.log("Database is Connected"))
  .catch((e) => console.log(e));

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
