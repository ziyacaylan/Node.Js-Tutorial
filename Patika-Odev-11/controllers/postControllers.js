import mongoose from "mongoose";
import Post from "../models/Post.js";

export const getAllPosts = async (req, res) => {
  const posts = await Post.find({}).sort("-dateCreated");
  res.render("index", { posts });
};

export const getPost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render("post", { post });
};

export const updatePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  post.title = req.body.title;
  post.detail = req.body.detail;
  post.save();
  res.redirect(`/post/${req.params.id}`);
};

export const createPost = async (req, res) => {
  await Post.create(req.body);
  res.redirect("/");
};

export const deletePost = async (req, res) => {
  await Post.findByIdAndRemove(req.params.id);
  res.redirect("/");
};
