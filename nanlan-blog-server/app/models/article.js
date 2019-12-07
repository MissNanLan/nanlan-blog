const mongoose = require('mongoose');
const articleSchema = new mongoose.Schema({
    title : String, 
    abstract: String, 
    content: String, 
    date: Date, 
    user_id: String, 
    like_count: Number, 
    comment_count: Number, 
    view_count: Number, 
    images: String
},{
    collection: 'article'
})

module.exports = mongoose.model('article',articleSchema)