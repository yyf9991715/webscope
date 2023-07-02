var express = require('express');
var router = express.Router();
var dbBook=require("../model/bookModel.js");

router.get("/",function(req,res){
    res.send("GET route on book");
});
router.get("/getall",async function(req,res){
    let book=await dbBook.getAllBookName();
    console.log("get all book name");
    res.json({Bookdata:book.slice(0,20)});
});

router.post("/detail",async function(req,res){
    let qid=req.data.bookid;
    let book=await dbBook.getBookDetail(qid);
    res.json({resbook:book})
})

router.get("/")
module.exports = router;
