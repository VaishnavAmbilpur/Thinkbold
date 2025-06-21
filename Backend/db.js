const mongoose = require("mongoose")
const dotenv = require('dotenv')
dotenv.config()
const connnect = async () =>{
    try{
        await mongoose.connect("mongodb+srv://vaishnavambilpur2006:Vaishnav%4011@cluster0.nhu16gt.mongodb.net/Notes")
        console.log("Connected");   
    } catch(err){
      console.log("Error Connecting the mongodb")
      process.exit(1);
    }
}
module.exports = connnect