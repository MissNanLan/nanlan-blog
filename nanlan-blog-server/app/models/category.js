const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    name: String
},{
    collection: 'category'
})

module.exports = mongoose.model('category', categorySchema)

