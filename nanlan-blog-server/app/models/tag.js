const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TagSchema = new mongoose.Schema(
  {
    name: String,
    article: [
      {
        type: Schema.Types.ObjectId,
        ref: "article",
      },
    ],
  },
  {
    collection: "tag",
  }
);

module.exports = mongoose.model("tag", TagSchema);
