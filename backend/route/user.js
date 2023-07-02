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
        res.json({Status:"success",id:`${userdata.id}`,name:userdata.name,email:userdata.email});
    }
    else res.json({Status:"fail"});
});
router.get("/userdata", async function(req,res){
    let usercookie=req.cookies;
    let userid=usercookie.id; 
    console.log(req.cookies);
    if(userid){
        console.log(userid)
        userdata=await dbUser.getUserById(userid);
        console.log("this is the data of current user: ",userdata);
        res.json({Status:"success",data:userdata});
    }
    else res.json({Status:"failed"});

});
async function getCookiesID(req){
    let userid=req.body.id;
    if(userid)return userid;
    else return null;
}
router.post("/updatePW",async function(req,res){
    let data = req.body;
    console.log(data);
    if(data.id){
        if(data.password&&data.passwordagain){

            if(data.password===data.passwordagain){
                await dbUser.changePW(data.id,data.newpw);
                const userstatus= await dbUser.getUserById(data.id);
                res.json({Status:"success",data:userstatus});
            }
            else res.json({Status:"pwddifferent"})
        }
        else res.json({Status:"emptyinput"});
    }
    else{
        res.json({Status:"notloged"});
    }
})

router.post("/upuserpro",async function(req,res){
    let data = req.body;
    let id=req.body.id;
    if(id!==null){
        console.log(data);
        if(data.newname&&data.newname!=="")await dbUser.changeName(id,data.newname);
        if(data.newmail&&data.newmail!=="")await dbUser.changeEmail(id,data.newmail);
        let userstatus= await dbUser.getUserById(id);
        res.json({Status:"success",data:userstatus});
    }
    else res.json({Status:"failed"})
})

router.post("/updateName",async function(req,res){
    let data = req.body;
    let id=getCookiesID(req);
    if(id!==null){

        console.log(data);
        const userstatus= await dbUser.changeName(id,data.newname);
        res.json({Status:"success",data:userstatus});
    }
    else res.json({Status:"failed"})
})
router.post("/updateemail",async function(req,res){
    let data = req.body;
    console.log(data);

        let id=getCookiesID(req);
        if(id!==null){
        const userstatus= await dbUser.changeEmail(id,data.newmail);
        res.json({Status:"success",data:userstatus});

    }

    else res.json({Status:"failed"})
})

router.post("/createnewuser/",async function(req,res){
    let data=req.body;
    console.log(data);
    if(data.password===data.passwordagain){
        const nUserdata= dbUser.addNewUser(data.name,data.password,data.email);
        if(nUserdata)res.json({Status:"success"});
        else res.json({Status:"failed"});
    }else{
        res.json({Status:"pwddifferent"});
    }
    
})

router.get("/isloged",async function(req,res){
    let myid= getCookiesID(req);
    if(id!==null)res.json({Status:"success",id:id});
    else res.json({Status:"failed"});
})
module.exports = router;
