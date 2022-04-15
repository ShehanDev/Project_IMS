const mongoose = require('mongoose');

const bookschema = mongoose.Schema({
    name    :  String,
    category :  String,
    discription :  String,
    author  :  String,
    image    :  String,
    
    created  :{
        type : Date,
        default :Date.now
    }
});

module.exports = mongoose.model("Book",bookschema);
