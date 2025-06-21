const express = require('express');
const app = express();
const NotesRoutes = require("./Routes/NotesRoutes")
const dotenv = require('dotenv');
const path = require('path')
const cors = require('cors');
app.use(express.json())
if(process.env.NODE_ENV!=="production"){
app.use(cors());
}
dotenv.config();
const mongoose = require("mongoose")
const connect = require("./db");
try{
    connect();
}catch(error){
    console.log(error)
}
app.use("/api/notes",NotesRoutes)
if(process.env.NODE_ENV === "production"){
app.use(express.static(path.join(__dirname,"../Frontend/Book/dist")));
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"../Frontend/Book","dist","index.html"));
})
}
app.listen(3000);