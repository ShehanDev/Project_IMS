const mongoose = require('mongoose');

const courseschema = mongoose.Schema({
    name    :  String,
    category :  String,
    discription :  String,
    lecturer  :  String,
    image    :  String,
    
    created  :{
        type : Date,
        default :Date.now
    }
});

module.exports = mongoose.model("Course",courseschema);