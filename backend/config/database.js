import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config();


export const  dbConnect = ()=>{
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

