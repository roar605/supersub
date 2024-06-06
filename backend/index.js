const express = require("express")
const app=express()

require("dotenv").config();
const port =process.env.PORT


app.use(express.json)

const dbConnect = require('./config/database')
dbConnect();

//start the server
app.listen(port,()=>{
    console.log("Server listening on port : "+port);
})