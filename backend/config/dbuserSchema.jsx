const mongoose = require("./mongodb.js");

// Initialize parameters
const collectionName = process.env.DB_COLLECTION;

const userSchema= new mongoose.Schema({
    userid:{
        type:string
    },
    username:{
        type:string
    },
    email:{
        type:string
    },
    password:{
        type:string
    }

})

// Create model from schema
let userModel = mongoose.model(collectionName, schema=userSchema, collectionName);

// Export model
module.exports = userModel;