const mongoose = require('mongoose');

const CoursesSchema = new mongoose.Schema({
    title: String,
    description: String,
    instructorname: String,
    price: Number,
    category:String,
    noenrolled:{
        type:Number,
        default:0,

    }


});

module.exports = mongoose.model("courses", CoursesSchema);