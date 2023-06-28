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

        return "true";
    }
    else{
        console.log(`the check result of login:false`)

        return "false";
    } 
}
async function checkUserExist(username){
    const retUser=await getUserByName(username);
    console.log(retUser)
    if(retUser)
    {
        console.log(`the check result:true`)
        return true;
    }
    else {
        console.log(`the check result:false`)
        return false;
    }
}
async function checkIDExist(uid){
    const retUser=await getUserById(uid);
    if(retUser!==null)
    {
        console.log(`the check result:true`)
        return true;
    }
    else {
        console.log(`the check result:false`)
        return false;
    }
}
async function idGenerater(){
    for(var i=1; i<50000;++i){
        t=await checkIDExist(i)
        if(t===false)return i;
    }
     return -1;
}
async function changePW(userID,newpw){
    const retUser = await User.findOneAndUpdate({id:userID},{password:newpw});
    console.log(retUser);
    return retUser;
}
async function changeEmail(userID,newEmail){
    const retUser = await User.findOneAndUpdate({id:userID},{email:newEmail});
    console.log(retUser);
    return retUser;
}
async function changeName(userID,newdata){
    console.log(`the userid:${userID}, the new name:${newdata}`);
    const exist=await checkUserExist(newdata);
    console.log(exist);
    if(exist===false)
    {
        const retUser = await User.findOneAndUpdate({id:userID},{name:newdata});
        console.log(retUser);
        return retUser;
    }
    else return null;
}

async function addNewUser(newName, newPw,newMail){
    newid=await idGenerater();
    console.log(newid,newName,newPw,newMail );
    console.log(typeof newid);
    const nUser= await User.create({id:newid,name:newName,password:newPw,email:newMail});
    return nUser;
}
// Export model
//module.exports = userModel;
module.exports={
    getUserByName,
    getUserById,
    getUserByEmail,
    checkUser,
    checkUserExist,
    changePW,
    checkIDExist,
    addNewUser,
    changeName,
    changeEmail
};

