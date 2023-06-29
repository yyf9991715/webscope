const mongoose = require("./mongodb.js");

// Initialize parameters
const collectionName = process.env.DB_COLLECTION;

const ratingSchema =new mongoose.Schema({
    userid:Number,
    type:String,
    itemid:String,
    review:String,
    rating:Number,
}
)

