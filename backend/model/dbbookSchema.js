const mongoose = require("./mongodb.js");

// Initialize parameters
const collectionName = process.env.DB_COLLECTION;

// Create mongoose schema
const bookSchema = new mongoose.Schema({
    
    bookid:{
        type:String
    },
    title:{
        type:String
    },
    author:{
        type:String
    },
    star5:{
        type:float
    },
    star4:{
        type:float
    },
    star3:{
        type:float
    },
    star2:{
        type:float
    },
    star1:{
        type:float
    }
   
})

// Create model from schema
let bookModel = mongoose.model(collectionName, schema=bookSchema, collectionName);

// Export model
module.exports = bookModel;