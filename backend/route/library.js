var express = require('express');
var router = express.Router();
var dbLib=require("../model/libModel.js");

router.post("/newlib", async function(req,res){
//userid, itemid,review, rating,type
    data=req.body;
    console.log(data);
    uid=Number(data.userid)
    iid=Number(data.itemid)
    console.log(uid,iid)
    if(uid&&iid){
        let new_mark= await dbLib.create_mark(data.userid, data.itemid,"books");
        if(new_mark!==null)res.json({Status:"success",data:new_mark});
        else res.json({Status:"failed to create new libitem"})
    }
    else res.json({Status:"request failed"})
});

router.get("/byuid/:uid", async function(req,res){
    let id=req.params.uid;
    console.log("get review by user id",id)
    let results= await dbLib.getlibbyUserID(id);
    // for(let i = 0;i<results.length;++i){
    //     itemid=results[i].itemid;

    // }
    console.log(results);
    res.json(results);
});

router.post("/del", async function(req,res){

    data=req.body;
    if(data.userid&&data.itemid){
        let new_mark= await dbLib.delLib(data.userid,data.itemid,"books");
        res.json({Status:"success"});
    }
    else res.json({Status:"failed"})

});

module.exports = router;
