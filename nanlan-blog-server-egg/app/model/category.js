module.exports = (app) => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
  
    const CategorySchema = new Schema(
      {
        name: String
      },
      {
        collection: "category",
      }
    );
  
    return mongoose.model("Category", CategorySchema);
  };
  