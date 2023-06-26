const express = require("express");
const cors = require("cors");
const booksModel = require("./model/dbbookSchema.js");
const userModel = require("./dbuserSchema")
// Define port
const port = 4000;

// Create Express app
const app = express();

// Add CORS to all routes and methods
app.use(cors());

// Enable parsing of JSON bodies
app.use(express.json());

// Start listening to the port
app.listen(port, () => {
    console.log("Listening on " + port + ".");
}); 

