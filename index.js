const express = require("express");

const app = express();
//const sockets = express();


const port = process.env.PORT || 3000; //makes everything public, heroku has it's own ports

app.get("/", (req, resp)=>{
   resp.end("Hopefully our app will be shown here");
})


app.listen(port, (err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log("port is running");
})