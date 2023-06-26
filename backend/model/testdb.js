const User = require("./dbuserSchema");

async function main(){

    const result= await User.getUserByName("yao");
    console.log(result.email);
}
main();
