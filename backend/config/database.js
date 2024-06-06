const mongoose = require("mongoose");
require("dotenv").config();


const dbConnect = ()=>{
    mongoose.connect(process.env.MONGODB_URL, {})
    .then(()=>{
        console.log("DB connection successfull");
    })
    .catch((error)=>{
        console.log("Issue with DB connection");
        console.log(error.message);
        process.exit(1);
    })
}

module.exports=dbConnect;