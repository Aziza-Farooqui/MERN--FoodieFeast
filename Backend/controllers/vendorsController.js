const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Vendor = require('../models/vendors');
const dotEnv= require('dotenv');

dotEnv.config();

const vendorRegister = async(req,res)=>{
    const {username,email,password}=req.body;

    try{
        const vendorEmail = await Vendor.findOne({email});
        if(vendorEmail){
            return res.status(400).json("Email already exists")
        }

        const hashedPass = await bcrypt.hash(password, 10);

        const newVendor=new Vendor({
            username,
            email,
            password:hashedPass
        });

        await newVendor.save();
        res.status(201).json({message:"Vendor registerd successfully"})

    } catch(error){
        console.error(error);
       res.status(500).json({error: "Internal server error"})
    }
}     


const vendorLogin = async(req,res)=>{
    const {email,password}=req.body;
    try{
         const vendor = await Vendor.findOne({email});
         if(!vendor || !(bcrypt.compare(password , vendor.password))){
            return res.status(401).json({error: "Invalid email or password"})
         }
       const token=jwt.sign({vendorId:vendor._id} , secretKey , {expiresIn: '1h'})

         res.status(200).json({success: "Login Successful" , token});
         
    } catch(error){

    }
}
module.exports={vendorRegister , vendorLogin}