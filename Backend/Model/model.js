const  mongoose = require("mongoose")

const noteSchma = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required :true
    },
    
},{timestamps:true});
const Notes = mongoose.model("Note",noteSchma);
module.exports = Notes;