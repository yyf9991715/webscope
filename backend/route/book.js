var express = require('express');
var router = express.Router();
var dbBook=require("../model/bookModel.js");

router.get("/",function(req,res){
    res.send("GET route on book");
});
router.get("/getall",async function(req,res){
    res.json(dbBook.getAllBookName());
} )
module.exports = router;
