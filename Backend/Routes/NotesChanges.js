const Notes = require("../Model/model")
const updateNote=async(req,res)=>{
  try{
   const {title,content}= req.body;
   const updated = await Notes.findOneAndUpdate({_id:req.params.id},{title,content})
   res.status(200).json({message:"Updated succesfully"})
  }catch(err){
    res.status(500).json({message:"Not found"});
  }
}
const deleteNote = async (req, res) => {
    try{
    const deleted = await Notes.findOneAndDelete({_id:req.params.id})
    res.status(200).json({message:"Delete succesfully"})
    }catch(err){
    res.status(500).json({message:"Not found"});
    }
}
module.exports={updateNote,deleteNote}