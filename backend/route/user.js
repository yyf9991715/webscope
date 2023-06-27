var express = require('express');
var router = express.Router();
var dbUser=require("../model/userModel");

router.get("/",function(req,res){
    res.send("GET route on users");
});

router.post("/auth", async function(req,res){
    let data=req.body;
    //console.log(req);
    console.log(`name:${data.name}`);
    console.log(`password:${data.password}`);
    retstr= await dbUser.checkUser(data.name,data.password);
    console.log(`the result of checkUser:${retstr}`);
    let options={
        httpOnly:true,
        maxAge:1000*60*60
    }
    if(retstr==="true"){
        userdata=await dbUser.getUserByName(data.name);
        console.log("cookie create successfully");
        res.json({Status:"success",id:`${userdata.id}`});
    }
    else res.json({Status:"fail"});
});
router.get("/userdata", async function(req,res){
    let usercookie=req.cookies;
    console.log("Cookies:",usercookie.id);
    userdata=await dbUser.getUserById(usercookie.id);
    console.log("this is the data of current user: ",userdata);
    res.send(userdata);
})

module.exports = router;
