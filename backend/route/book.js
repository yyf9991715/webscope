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

router.get("/detail/:bookid",async function(req,res){
    let qid=req.params.bookid;
    if(qid){
        let book=await dbBook.getBookDetail(qid);
        console.log(book);
        res.json({Status:"success",resbook:book});
    }
    else res.json({Status:"failed"});
});

router.post("/querykey",async function(req,res){
    let keyword=req.data.keyword;
    let booklist= await dbBook.getBookByKey(keyword);
    res.json(booklist);
});


router.get("/rating",async function(req,res){
    res.json({})
})
module.exports = router;
