const express = require("express");

const app = express();
//const sockets = express();


const port = process.env.PORT || 3000; //makes everything public, heroku has it's own ports

app.get("/", (req, resp)=>{
   resp.end("Hi, welcome to my Heroku app");
})

////option 2
//sockets.get('/', function (req, res) {
//  console.log(sockets.mountpath); // /admin
//  res.send('sockets page');
//});
//
//app.use('/sockets', require('./sockets'));

//option3
//app.all('./sockets', function (req, res, next) {
//  console.log('Accessing sockets ...')
//  next() // pass control to the next handler
//});

app.listen(port, (err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log("port is running");
})