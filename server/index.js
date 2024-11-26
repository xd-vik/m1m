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

app.get("/", (req, res) => {
  res.send("Hello From Backend!");
});

app.get("/test", (req, res) => {
  res.send("good to go");
});

mongoose
  .connect(DB_URI)
  .then(() => console.log("Database is Connected"))
  .catch((e) => console.log(e));

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
