import express from "express";
import mongoose from "mongoose";
import methodOverride from "method-override";
import ejs from "ejs";
// import path, { join } from "path";

import Post from "./models/Post.js";

import {
  getAllPosts,
  getPost,
  updatePost,
  createPost,
  deletePost,
} from "./controllers/postControllers.js";

import {
  getAboutPage,
  getAddPage,
  getEditPage,
} from "./controllers/pageControllers.js";

// const express = require("express");
// const mongoose = require("mongoose");
// const ejs = require("ejs");
// const path = require("path");
// const Post = require("./models/Post");

const app = express();

//connect DB
mongoose.connect("mongodb://localhost/cleanblog-test-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//TEMPLATE ENGINE
app.set("view engine", "ejs");

// MIDDLEWARE
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method", { methods: ["POST", "GET"] }));

//ROUTES
app.get("/", getAllPosts);
app.get("/post/:id", getPost);
app.put("/post/:id", updatePost);
app.get("/about", getAboutPage);
app.delete("/post/:id", deletePost);

app.get("/add_post", getAddPage);
app.post("/add", createPost);
app.get("/edit_post/:id", getEditPage);

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
