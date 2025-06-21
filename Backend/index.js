const express = require('express');
const app = express();
const NotesRoutes = require("./Routes/NotesRoutes")
const dotenv = require('dotenv');
const cors = require('cors');
app.use(express.json())
app.use(cors());
dotenv.config();
const mongoose = require("mongoose")
const db = require("./db");
try{
    db();
}catch(error){
    console.log(error)
}
app.use("/api/notes",NotesRoutes)
app.listen(3000);