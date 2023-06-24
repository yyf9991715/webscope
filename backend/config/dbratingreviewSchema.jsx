const mongoose = require("./mongodb.js");

// Initialize parameters
const collectionName = process.env.DB_COLLECTION;

const ratingreviewSchema =new mongoose.Schema({
    userid:{
        type:string
    },
    type:{
        type:string
    },
    itemid:{
        type:string
    },
    review:{
        type:string
    },
    rating:{
        type:int
    }
})
