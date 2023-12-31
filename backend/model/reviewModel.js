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
    itemName:String,
    review:String,
    rating:Number,
}
)
//init the model
let reviewModel = mongoose.model("Review", schema=ReviewSchema);

async function create_review(uid,itemtype,iid,ureview,urating){
    let newreview=null;
    let book = await Book.addNewRating(iid,urating);
    console.log(book)
    // if(ureview&&ureview!==""){
        console.log(uid,itemtype,iid,ureview,urating);
        const u=await getUserById(uid);
        const i=await Book.getBookDetail(iid);
        console.log(u.name);
        console.log(i.title)
        newreview= await reviewModel.create({
            userid:uid,
            userName:u.name,
            type:itemtype,
            itemid:iid,
            itemName:i.title,
            review:ureview,
            rating:urating
        });
    // }
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

