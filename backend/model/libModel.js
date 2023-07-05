const mongoose = require("./mongodb.js");
const Book=require("./bookModel.js");
const User = require("./userModel.js");
// Initialize parameters
const collectionName = process.env.DB_COLLECTION;

const LibSchema =new mongoose.Schema({
    userid:Number,
    userName:String,
    type:String,
    itemid:Number,
    itemName:String,
}
)
//init the model
let libModel = mongoose.model("library", schema=LibSchema);

async function create_mark(uid,iid, utype){
    let u=await User.getUserById(uid);
    let i= await Book.getBookDetail(iid);
    libModel.create({
        userid:uid,
        userName:u.name,
        type:utype,
        itemid:iid,
        itemName:i.title,
    })
}


