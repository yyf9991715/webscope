const mongoose = require("./mongodb.js");

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
let bookModel = mongoose.model("Review", schema=ReviewSchema);

async function create_review(userid,itemtype,itemid,review,rating){
    

}
