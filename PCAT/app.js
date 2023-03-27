const express = require("express");
const app = express();
const path = require("path");

// MIDDLEWARES
// const myLogger = (req, res, next) => {
//   console.log("Middleware Log 1");
//   next();
// };

// const myLogger2 = (req, res, next) => {
//   console.log("Middleware Log 2");
//   next();
// };
// app.use(myLogger);
// app.use(myLogger2);

app.use(express.static("temp"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "temp/index.html"));
});

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
