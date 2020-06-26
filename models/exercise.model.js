const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ExerciseSchema = new Schema({
    description:{type: String, required: true},
    duration:{type: Number, required: true},
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
//        ref: 'User'
    },
    date:{type:Date}
},{timestamps:true});


// Export the model
module.exports = mongoose.model('Exercise', ExerciseSchema);