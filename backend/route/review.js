var express = require('express');
var router = express.Router();
var dbReview=require("../model/reviewModel.js");

router.post("/newreview", async function(req,res){
//userid, itemid,review, rating,type
    data=req.body;
    console.log(data);
    if(data.userid&&data.itemid){
        let new_review = await dbReview.create_review(data.userid,"books", data.itemid,data.review,data.rating);
        if(new_review)res.json({Status:"success",review:new_review});
        else res.json({Status:"failed to create new rating"})

    }
    else res.json({Status:"request failed"})
});
router.get("/byuid/:uid", async function(req,res){
    let id=req.params.uid;
    console.log("get review by user id",id)
    let results= await dbReview.getReviewbyUserID(id);
    console.log(results);
    res.json(results);
});

router.get("/byitemid/:iid", async function(req,res){
    let id=req.params.iid;
    console.log("get review by item id",id)               
    let results= await dbReview.getReviewbyItemID(id);
    console.log(results);
    res.json(results);
});

module.exports = router;
