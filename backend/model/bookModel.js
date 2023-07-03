const { ObjectId } = require("mongodb");
const mongoose = require("./mongodb.js");

// Initialize parameters
const collectionName = process.env.DB_COLLECTION;

// Create mongoose schema
const bookSchema = new mongoose.Schema({
    _id:{ type: mongoose.ObjectId, required: true },
    id:Number,
    title:String,
    price:mongoose.Decimal128,
    n_reviews:Number,
    avg_reviews:{
        type: mongoose.Decimal128,
    },
    publisher:String,
    pages:Number,
    dimensions:String,
    author:String,
    ISBN_13:String,
    link:String,
    language:String,
    NS1:Number,
    NS2:Number,
    NS3:Number,
    NS4:Number,
    NS5:Number,
    SUM:Number,
});
  
// Create model from schema
let bookModel = mongoose.model("Books", schema=bookSchema);
async function getAllBook(){
    let result=await bookModel.find({}).exec();
    return result;
}

async function getAllBookName(){
    let result=await bookModel.find({}).select("id title author avg_reviews").exec();

    //console.log(result.slice(0,10));
    return result;
}


async function getBookByKey(key){
    let result= await bookModel.find({title:{$regex:key }}).exec();
    return result;
}

async function getBookDetail(nid){
    // let qid=new ObjectId(id);
    console.log(nid);
    let result = await bookModel.findOne({id:nid});
    return result;
}
 
async function getNewAvg_rating(book){
}

async function getBookRating(id){
    const book= await getBookDetail(id);
    console.log(book);
    if(book.avg_reviews){

    }
    return book.avg_reviews;
}

// Export model
module.exports = {
    bookModel,
    getAllBook,
    getAllBookName,
    getBookByKey,
    getBookDetail,
    getBookRating,
};

