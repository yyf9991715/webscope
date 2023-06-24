const express = require("express");
const cors = require("cors");
const booksModel = require("./config/dbbookSchema.jsx");

// Define port
const port = 3600;

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