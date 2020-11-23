const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const articleSchema = new mongoose.Schema(
  {
    title: String,
    abstract: String,
    content: String,
    date: Date,
    user_id: String,
    like_count: Number,
    comment_count: Number,
    view_count: Number,
    images: String,
    category: [
      {
        type: Schema.Types.ObjectId,
        ref: "category",
      },
    ],
    tag: [
      {
        type: Schema.Types.ObjectId,
        ref: "tag",
      },
    ]
  },
  {
    collection: "article",
  }
);

module.exports = mongoose.model("article", articleSchema);
