const mongoose = require("./mongodb.js");

// Initialize parameters
const collectionName = process.env.DB_COLLECTION;

// Create mongoose schema
const bookSchema = new mongoose.Schema({
    _id:String,
    title:String,
    price:mongoose.Decimal128,
    n_reviews:Number,
    avg_reviews:{
        type: mongoose.Decimal128
    },
    publisher:String,
    pages:Number,

    dimensions:String,
    author:String,
    star5:{
        type: mongoose.Decimal128
    },
    star4:{
        type: mongoose.Decimal128
    },
    star3:{
        type: mongoose.Decimal128
    },
    star2:{
        type: mongoose.Decimal128
    },
    star1:{
        type: mongoose.Decimal128
    },
    ISBN_13:String,
    link:String,
    language:String,

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


async function getBookByKey(key){
    let result= await bookModel.find({title:{$regex:key }});
    return result;
}

async function getBookDetail(id){
    let result = await bookModel.findOne({_id:id}).exec();
    return result;
}


async function getBookRating(id){
    const book= await getBookDetail(id);
    return book.avg_reviews;
}

// Export model
module.exports = {bookModel,getAllBook,getAllBookName};