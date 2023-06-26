const mongoose = require("mongoose");
require('dotenv').config();

// Initialize parameters
const dbName ="webscope";
// process.env.DB_NAME;

// database connection string
const dbUrl =  "mongodb+srv://webscope:webscope@cluster0.wv8jnc3.mongodb.net/?retryWrites=true&w=majority";
//process.env.MONGODB_URL;

// create database connection
mongoose.connect(dbUrl, 
  {
    dbName:dbName
  })
  .then(()=>{
    console.log("connected to DB");
  })
  .catch((err)=>{
    console.log("Error connection to DB",err);
  })
module.exports = mongoose;
