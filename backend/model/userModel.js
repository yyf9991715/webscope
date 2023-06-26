const mongoose = require("./mongodb.js");

// Initialize parameters
const collectionName = process.env.DB_COLLECTION;

const userSchema= new mongoose.Schema({
    id:Number,
    name:String,
    email:String,
    password:String

});
// the Schema of users. It will connect to the "users" collection
const User = mongoose.model("User",userSchema);
async function getUserByName(name){

    const retUser= await User.findOne(
        {name:`${name}`}
    ).exec();
    console.log(`find a User:\n${retUser}`)
    return retUser;

}
async function getUserById(id){

    const retUser= await User.findOne(
        {id:`${id}`}
    ).exec();
    console.log(`find a User:\n${retUser}`)
    return retUser;

}
async function getUserByEmail(email){

    const retUser= await User.findOne(
        {email:`${email}`}
    ).exec();
    console.log(`find a User:\n${retUser}`)
    return retUser;

}
async function checkUser(username,password){
    const retUser= await  getUserByName(username)
    console.log(`find a User:\n${retUser}`)

    if(retUser!==null&&retUser.password === password){
        console.log(`the check result of login:true`)

        return true;
    }
    else{
        console.log(`the check result of login:false`)

        return false;
    } 
}
async function checkUserExist(username){
    const retUser=await getUserByName(username);
    if(retUser!==null)
    {
        console.log(`the check result:true`)
        return true;
    }
    else {
        console.log(`the check result:true`)
        return false;
    }
}

// Export model
//module.exports = userModel;
module.exports={getUserByName,getUserById,getUserByEmail,checkUser,checkUserExist};