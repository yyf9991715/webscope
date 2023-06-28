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
        console.log(`${userdata.id}`)
        res.cookie("id",`${userdata.id}`,options);
        res.json({Status:"success",id:`${userdata.id}`});
    }
    else res.json({Status:"fail"});
});
router.get("/userdata", async function(req,res){
    let usercookie=req.cookies;
    let userid=usercookie.id;
    console.log(req.cookies)

    if(userid){
        console.log(userid)
        userdata=await dbUser.getUserById(userid);
        console.log("this is the data of current user: ",userdata);
        res.json({Status:"success",data:userdata});
    }
    else     res.json({Status:"failed"});

});

router.post("/updatePW",async function(req,res){
    let data = req.body;
    console.log(data);
    if(data.id&&data.newpw){

        const userstatus= await dbUser.changePW(data.id,data.newpw);
        res.json({Status:"success",data:userstatus});
    }
    else{
        res.json({Status:"failed"})
    }
})
router.post("/updateName",async function(req,res){
    let data = req.body;
    console.log(data);
    const userstatus= await dbUser.changeName(data.id,data.newname);
    res.json({Status:"success",data:userstatus});
})
router.post("/updateemail",async function(req,res){
    let data = req.body;
    console.log(data);
    const userstatus= await dbUser.changeEmail(data.id,data.newmail);
    res.json({Status:"success",data:userstatus});
})

router.post("/createnewuser/",async function(req,res){
    let data=req.body;
    console.log(data);
    const nUserdata= dbUser.addNewUser(data.name,data.password,data.email);
    res.json({Status:userstatus});
})

router.post("/isloged",async function(req,res){

})
module.exports = router;
