const mongoose = require('mongoose');
const TagSchema = new mongoose.Schema({
    name: String
},{
    collection: 'tag'
})

module.exports = mongoose.model('tag',TagSchema)