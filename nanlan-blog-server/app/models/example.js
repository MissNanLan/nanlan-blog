const mongoose = require('mongoose');
const exampleSchema = new mongoose.Schema({
    msg:{
        type: String,
        require: true
    }
},{
    collection: 'example'
})

module.exports = mongoose.model('example',exampleSchema);