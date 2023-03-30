import Post from "../models/Post.js";

export const getAboutPage = (req, res) => {
  res.render("about");
};

export const getAddPage = (req, res) => {
  res.render("add_post");
};

export const getEditPage = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render("edit_post", { post });
};
