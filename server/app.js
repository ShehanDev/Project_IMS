//imports 
require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;


//middlewares
app.use(cors());
app.use (express.json());
app.use(express.static("uploads"));
app.use(express.urlencoded({extended:true}))

//db connection 
mongoose.connect(process.env.DB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    //useFindAndModify:true,
   // useCreateIndex:true
}).then(()=>{
    console.log("connected to Database!")
}).catch((err)=>{
    console.log(err);

});


//start server
app.listen(() =>  console.log(`server up and Running at http://localhost:${port} `));


