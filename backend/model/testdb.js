const Book = require("./bookModel.js");
const User = require("./userModel.js");

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
    console.log(testdata);
}

async function testgetAllBookName(){
    testdata=await Book.getAllBookName()
    console.log(testdata);
}

testgetAllBookName()