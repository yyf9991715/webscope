const Book = require("./bookModel.js");

async function main(){
    testdata=await Book.getAllBook();
    for(let i=0;i<20;i++){
        console.log(testdata[i]);
    }
}
main();
