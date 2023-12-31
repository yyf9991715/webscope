const express = require("express");
const cors = require("cors");
//const booksModel = require("./model/dbbookSchema.js");
const userModel = require("./model/userModel.js")

var bodyParser=require("body-parser");
var cookieParser=require("cookie-parser");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Add CORS to all routes and methods
app.use(cors({
    origin: true,
   // credentials: true
  }));

// Enable parsing of JSON bodies
app.use(express.json());

const userroute = require('./route/user.js');
const bookroute = require("./route/book.js");
const reviewroute=require("./route/review.js");
const chatroute = require("./route/chat.js");
const libroute = require("./route/library.js");
//both index.js and things.js should be in same directory
app.use('/user', userroute);
app.use('/book',bookroute);
app.use('/review',reviewroute);
app.use("/lib",libroute);
app.use('/chat', chatroute);
// Define port
const port = 4000;
// Start listening to the port
app.listen(port, () => {
    console.log("Listening on " + port + ".");
}); 
