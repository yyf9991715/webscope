const Book = require("./bookModel.js");
const User = require("./userModel.js");
const Review = require("./reviewModel.js");
async function main(){
    testdata=await Book.getAllBookName();
    for(let i=0;i<20;i++){
        console.log(testdata[i]);
    }
}
async function testUser()
{
    testdata=await User.getUserById(1);
    console.log(testdata);
}
async function testgetAllBook()
{
    testdata=await Book.getAllBook()
    console.log(testdata.slice(0,20));
}

async function testgetAllBookName(){
    testdata=await Book.getAllBookName();
    testdata=testdata.slice(0,20)
    for(i=0;i<testdata.length;++i){
        if(testdata[i].avg_reviews)testdata[i].avg_reviews=testdata[i].avg_reviews.toString();
    }
    console.log(testdata);
}

async function testgetBookByKey(){
    testdata=await Book.getBookByKey("Python");
    console.log(testdata);
}
async function testgetBookDetail(){
    testdata=await Book.getBookDetail("1")
    console.log(testdata);
}

async function testcreate_review(){
    testdata=await Review.create_review(2,"books",2,"A very good book",5);
    console.log(testdata);
}
async function testgetReviewbyItemID(){
    testdata=await Review.getReviewbyItemID(2);
    console.log(testdata);
}
async function testgetReviewbyUserID(){
    testdata=await Review.getReviewbyUserID(1);
    console.log(testdata);
}
// testgetReviewbyItemID();
testgetReviewbyUserID();