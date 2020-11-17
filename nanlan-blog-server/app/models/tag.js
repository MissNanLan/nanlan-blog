const mongoose = require('mongoose');
const TagSchema = new mongoose.Schema({
    name: Array,
    artcileId: Array
},{
    collection: 'tag'
})

module.exports = mongoose.model('tag',TagSchema)