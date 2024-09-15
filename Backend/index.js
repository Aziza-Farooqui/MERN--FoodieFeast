const express = require("express");
const connectToDatabse =require('./config/Database');
const vendorRoutes = require('./routes/vendoeRoutes');
const bodyParser= require('body-parser');

const app=express();
const PORT=4000;

connectToDatabse();

app.use('/home', (req,res)=>{
  res.send("<h1>FoodieFeast</h1>");
})

app.use(bodyParser.json());
app.use('/vendor', vendorRoutes);

app.listen(PORT , ()=>{
    console.log(`server running on ${PORT}`)
})
