const mongoose = require('mongoose');
const loginSchema = new mongoose.Schema({
    name: String,
    pwd: String
},{
    collection: 'user'
})

module.exports = mongoose.model('user',loginSchema)