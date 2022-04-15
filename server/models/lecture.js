const mongoose = require('mongoose');

const lectureschema = mongoose.Schema({
    name    :  String,
    subjects :  String,
    discription :  String,
    image    :  String,
    
    created  :{
        type : Date,
        default :Date.now
    }
});

module.exports = mongoose.model("Lecture",lectureschema);