const express = require("express");
const connectToDatabse =require('./config/Database')


const app=express();
const PORT=4000;

connectToDatabse();

app.use('/home', (req,res)=>{
  res.send("<h1>FoodieFeast</h1>");
})


app.listen(PORT , ()=>{
    console.log(`server running on ${PORT}`)
})
