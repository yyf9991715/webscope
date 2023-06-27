const mongoose = require("./mongodb.js");

// Initialize parameters
const collectionName = process.env.DB_COLLECTION;

// Create mongoose schema
const bookSchema = new mongoose.Schema({
    _id:String,
    title:String,
    price:mongoose.Decimal128,
    n_reviews:Number,
    star5:Number,
    star4:Number,
    star3:Number,
    star2:Number,
    star1:Number,
    ISBN_13:String,
    link:String
});

// Create model from schema
let bookModel = mongoose.model("Books", schema=bookSchema);
async function getAllBook(){
    let result=await bookModel.find({}).exec();
    return result;
}
async function getAllBookName(){
    let result=await bookModel.find({}).select("title").exec();
    return result;
}


// async function getBookByKey(key){
//     let result= await bookModel.find({title:{$regex}})
// }
// Export model
module.exports = {bookModel,getAllBook,getAllBookName};