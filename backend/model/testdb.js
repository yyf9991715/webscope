const Book = require("./bookModel.js");
const User = require("./userModel.js");

async function main(){
    testdata=await Book.getAllBookName();
    for(let i=0;i<20;i++){
        console.log(testdata[i]);
    }
}
async function test()
{
    testdata=await User.idGenerater();
    console.log(testdata);
}
test();
