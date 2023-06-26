var express = require('express');
var router = express.Router();
var dbUser=require("../model/userModel");

router.get("/",function(req,res){
    res.send("GET route on users");
});

router.post("/login",function(req,res){
    let data=req.body;
    console.log(data);
    res.send(true);
});
module.exports = router;
