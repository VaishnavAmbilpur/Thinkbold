import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { use } from 'react';
import { useNavigate, useParams } from 'react-router';
import Loader from '../Components/Loader';
import { Link } from 'react-router';
import { ArrowLeftIcon, DeleteIcon, Save, TractorIcon, Trash2Icon } from 'lucide-react';
import toast from 'react-hot-toast';

const NoteDetail = () => {
  const [note,setnote] = useState({});
  const [loading,setloading] = useState(true);
  const [saving,setsaving] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();

  useEffect(()=>{
    const fetchNote = async()=>{
      try{
      const response = await axios.get(`http://localhost:3000/api/notes/${id}`)
      setnote(response.data);
      }catch(err){
        console.log(err);
      }finally{
        setloading(false);
      }
    }
    fetchNote();
  },[id])

  const handledelete = async()=>{
    if(!window.confirm("Are you Sure You want to Delte"))return;

    try{
      const res = await axios.delete(`http://localhost:3000/api/notes/${id}`);
      toast.success("You are Deleted the Note");
      navigate("/")
    }catch(err){
      console.log(err);
      toast.error("Error in Deleting the Note");
    }
  }
  const handlesave = async () => {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error("Please add a title or content");
      return;
    }

    setsaving(true);

    try {
      const res = await axios.put(`http://localhost:3000/api/notes/${id}`, note);
      toast.success("Note updated successfully");
      navigate("/");
    } catch (error) {
      console.log("Error saving the note:", error);
      toast.error("Failed to update note");
    } finally {
      setsaving(false);
  
    }
  }
  if(loading){
  return (
    <div className="max-w-7xl mx-auto min-h-screen flex justify-around items-center"><Loader/></div> 
  )
  }
  return(
    <div className='mx-auto min-h-screen p-5 bg-zinc-950'>
      <div className='mx-auto max-h-4xl max-w-3xl'>
          <div className='flex flex-col'>
            <div className='flex justify-between'>
              <Link to={"/"} className='gap-1 btn btn-accent text-zinc-950'>
                        <ArrowLeftIcon />
                        <span className='font-extrabold'>Back to Home</span>
                </Link>
                <button class="btn text-red-600 btn-ghost" onClick={handledelete}><Trash2Icon/></button>
            </div>
     
                <div className='card mt-5 overflow-x-hidden'>
                            <h2 className='card-title text-4xl m-2 tracking-tighter'>Update Note</h2>
                        <div className='card-body'>
                          <form  className='flex flex-col' >
                                <label className='label m-3'>
                                    <div className='label-text'>TITLE</div>
                                </label>
                                <input
                                    type="text"
                                    placeholder='Title'
                                    className='input input-bordered'
                                    onChange={(e) => setnote({ ...note, title: e.target.value })}
                                />
                                <label className='label m-3'>
                                    <div className='label-text'>NOTE</div>
                                </label>
                                <textarea
                                    placeholder='Write a Note...'
                                    className='input input-bordered w-140 min-h-60 p-3'
                                    onChange={(e) => setnote({ ...note, content: e.target.value })}
                                />
                                <div className='card-actions justify-end mt-4'>
                                    <button className='btn btn-accent p-5 text-zinc-950' type="button"onClick={handlesave}>
                                      {saving? "Saving":"SaveChages"}
                                    </button>
                                </div>
                            </form>
                        </div>
                </div>
          </div>
           
      </div>
    </div>
  )
}

export default NoteDetail