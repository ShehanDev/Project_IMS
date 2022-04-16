const mongoose = require('mongoose');

const studentschema = mongoose.Schema({
    name    :  String,
    mobile:Number,
    faculty :  String,
    courses : [ String ],
    image    :  String,
    
    created  :{
        type : Date,
        default :Date.now
    }
});

module.exports = mongoose.model("Student",studentschema);