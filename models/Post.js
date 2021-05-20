const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PostSchema = new Schema({
    First_Name: String,
    Last_Name: String,
    Age: Number,
    Date_of_birth: Date
},{ versionKey: false })

module.exports = mongoose.model('Posts',PostSchema)