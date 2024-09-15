const mongoose = require('mongoose');
const dotEnv = require('dotenv');

dotEnv.config();

async function connectToDatabse() {
    try{
        await mongoose.connect(process.env.Mongo_Url, {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });
        console.log("DB Connected successfully");
    } catch(error) {
        console.log("Error connecting to DB");  
        process.exit(1); 
    }
}

module.exports=connectToDatabse;