const express=require("express");
const app=express();
const port=3000;



app.listen(port,()=>{
    console.log(`Server is Working on port:${port}`);
});//listen the port and open the server
