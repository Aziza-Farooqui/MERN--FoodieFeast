const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Vendor = require('../models/vendors');

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

module.exports={vendorRegister}