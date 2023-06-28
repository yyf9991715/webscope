var express = require('express');
var bodyParser=require("body-parser")
var cookieParser=require("cookie-parser")
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
const user = require('./user.js');

//both index.js and things.js should be in same directory
app.use('/user', user);
app.use(express.json());
app.listen(4000);