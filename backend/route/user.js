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

    if(retstr==="true"){
        userdata=await dbUser.getUserByName(data.name);
        res.json({Status:"success",id:`${userdata.id}`});
    }
    else res.json({Status:"fail"});
});
router.get("/userdata/:id", async function(req,res){
    console.log(req.params.id);
    userdata=await dbUser.getUserById(req.params.id);
    console.log("this is the data of current user: ",userdata);
    res.json(userdata);
})

module.exports = router;
