const mongoose = require("mongoose");
const starSchema = new mongoose.Schema(
  {
    article_id: String,
    user_id: String,
    type: String,
    status: Boolean
  },
  {
    collection: "behavior"
  }
);

module.exports = mongoose.model("behavior", starSchema);
