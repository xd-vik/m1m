const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser')
require("dotenv").config();
require('../server/Models/db')
const CourseRouter = require('../server/Routes/CourseRouter')
const AuthRouter = require('../server/Routes/AuthRouter')

const PORT = process.env.PORT || 3000;
const allowedOrigin = process.env.ORIGIN || "*";
// const DB_URI = process.env.DB_URI;

app.use(
  cors({
    origin: allowedOrigin,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ success: true, message: "Backend is live from vercel" });
});

app.get("/test", (req, res) => {
  res.json({ message: "Test Api hits" });
});

app.use(bodyParser.json());
app.use(cors());
app.use('/auth',AuthRouter)

app.use('/course',CourseRouter)



app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
