const express = require("express");
const mongoose = require("mongoose");

const ejs = require("ejs");
const path = require("path");
const Photo = require("./models/Photo");

const app = express();

//connect DB
mongoose.connect("mongodb://localhost/pcat-test-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// TEMLPATE ENGINE
app.set("view engine", "ejs");

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

// MIDDLEWARES
app.use(express.static("temp"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//ROUTES
app.get("/", async (req, res) => {
  const photos = await Photo.find({});
  res.render("index", { photos });
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/add", (req, res) => {
  res.render("add");
});
app.post("/photos", async (req, res) => {
  //res.render("add");
  // console.log(req.body);
  await Photo.create(req.body);
  res.redirect("/");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
