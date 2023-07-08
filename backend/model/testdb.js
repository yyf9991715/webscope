const Book = require("./bookModel.js");
const User = require("./userModel.js");
const Review = require("./reviewModel.js");
const Lib=require("./libModel.js");


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
    testdata=await Review.create_review(2,"books",2,"",5);
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
//testgetReviewbyUserID();
// testcreate_review()

async function testaddNewRating(){
    testdata=await Book.addNewRating(1,3);
    console.log(testdata);
}

async function testcalc_new_SUM(){
    testdata=await Book.getBookDetail(20);
    testdata=await Book.calc_new_SUM(testdata);
    console.log(testdata);
}

async function testaddNewRating(){
    testdata=await Book.addNewRating(1,3);
    console.log(testdata);
}
//testcalc_new_SUM()
// testaddNewRating();

async function testcreate_mark(){
    testdata=await Lib.create_mark(1,22,"book");
    console.log(testdata);
}

testcreate_mark();
async function testgetlibbyUserID(){

    testdata=await Lib.getlibbyUserID(1);
    console.log(testdata);
}

// testgetlibbyUserID();

async function testdelLib(){

    Lib.delLib(1,22);
    testdata=await Lib.getlibbyUserID(1);
    console.log(testdata);
}

// testdelLib();