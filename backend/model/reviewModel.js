const mongoose = require("./mongodb.js");
const Book=require("./bookModel.js")
// Initialize parameters
const collectionName = process.env.DB_COLLECTION;

const ReviewSchema =new mongoose.Schema({
    userid:Number,
    type:String,
    itemid:String,
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
        newreview= await reviewModel.create({userid:uid,type:itemtype,itemid:iid,review:ureview,rating:urating});

    }
    


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

