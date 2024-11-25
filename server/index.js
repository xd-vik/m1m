const express = require("express");
const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Hello From Backend!");
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
