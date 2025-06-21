const Notes = require("../Model/model")
const getall = async(req,res)=>{
    try{
      const notes = await Notes.find();
      res.status(200).json(notes);
    }catch(err){
      res.status(500).json({message:"Internal Server notWorking"})
    }
}
const postNote = async (req,res)=>{
     try{
       const {title,content} = req.body
       const newNote = await Notes.create({
        title : title,
        content : content    
       })
       console.log("HI")
       res.json({message: "Created"})
     }catch(err){
       console.log(err)
     }
}
const getNote = async(req,res) =>{
   try{
      const note = await Notes.findOne({_id:req.params.id});
      if(note){
        res.status(200).json({meassage: note})
      }
   }catch(err){
       res.status(404).json({message:"Not found"});
   }
}
module.exports = {getall,postNote,getNote}