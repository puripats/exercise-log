const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    username: {type: String, required: true},
   // activities:{[String]},
    createdAt: Number,
    updatedAt: Number,
},{timestamps:true});


// Export the model
module.exports = mongoose.model('User', UserSchema);