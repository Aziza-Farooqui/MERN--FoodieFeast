const mongoose =require('mongoose');

const vendorSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
})

const Vendor =mongoose.model('Vendor' , vendorSchema);
module.exports=Vendor;