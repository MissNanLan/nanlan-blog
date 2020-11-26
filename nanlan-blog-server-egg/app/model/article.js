module.exports = (app) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const ArticleSchema = new Schema(
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
      category: [{
        type: Schema.Types.ObjectId,
        ref: 'Category'
      }],
    },
    {
      collection: "article",
    }
  );

  return mongoose.model("Article", ArticleSchema);
};
