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
async function testBook()
{
    testdata=await Book.getAllBookName
    console.log(testdata);
}
testUser();
