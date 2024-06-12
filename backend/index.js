import express from "express";
const app=express()

import routes from "./routes/route.js"

import dotenv from "dotenv";
dotenv.config();
const port =process.env.PORT


app.use(express.json());
app.use((req, res, next) => {
    console.log("request is coming");
    next()
    
  });

  app.get("/", (req, res) => {
	res.send('Hello World!')
  })
app.use("/api/route", routes);

//const dbConnect = require('./config/database')
import {dbConnect} from "./config/database.js";
dbConnect();

//start the server
app.listen(port,()=>{
    console.log("Server listening on port : "+port);
})