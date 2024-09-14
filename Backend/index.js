const express = require("express");
const app=express();
const dotEnv= require("dotenv");
const mongoose =require("mongoose");

const PORT=4000;

dotEnv.config();


app.use('/home', (req,res)=>{
  res.send("<h1>FoodieFeast</h1>");
})

mongoose.connect(process.env.Mongo_Url)
.then(()=> console.log("Connected to Database"))
.catch((error)=>console.log(error));

app.listen(PORT , ()=>{
    console.log(`server running on ${PORT}`)
})
