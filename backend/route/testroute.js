var express = require('express');
const bodyParser=require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const user = require('./user.js');

//both index.js and things.js should be in same directory
app.use('/user', user);
app.use(express.json());
app.listen(3001);