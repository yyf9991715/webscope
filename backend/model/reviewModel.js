const mongoose = require("./mongodb.js");
const Book=require("./bookModel.js");
const { getUserById } = require("./userModel.js");
// Initialize parameters
const collectionName = process.env.DB_COLLECTION;

const ReviewSchema =new mongoose.Schema({
    userid:Number,
    userName:String,
    type:String,
    itemid:Number,
    review:String,
    rating:Number,
}
)
//init the model
let reviewModel = mongoose.model("Review", schema=ReviewSchema);

async function create_review(uid,itemtype,iid,ureview,urating){
    let newreview=null
    if(ureview&&ureview!==""){
        console.log(uid,itemtype,iid,ureview,urating);
        const u=await getUserById(uid);
        console.log(u.name);
        newreview= await reviewModel.create({
            userid:uid,
            userName:u.name,
            type:itemtype,
            itemid:iid,
            review:ureview,
            rating:urating
        });
    }
    console.log(newreview);
    return newreview;
}
async function getReviewbyUserID(uid){

    const reviews= await reviewModel.find({userid:uid}).exec();
    return reviews;
}

async function getReviewbyItemID(iid){
    const reviews= await reviewModel.find({itemid:iid}).exec();
    return reviews;
}
module.exports = {
    create_review,
    getReviewbyItemID,
    getReviewbyUserID,
    reviewModel,
};

