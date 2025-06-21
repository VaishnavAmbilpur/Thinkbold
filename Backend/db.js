const mongoose = require("mongoose")
const dotenv = require('dotenv')
dotenv.config()
const connnect = async () =>{
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("Connected");   
    } catch(err){
      console.log("Error Connecting the mongodb")
      process.exit(1);
    }
}
module.exports = connnect