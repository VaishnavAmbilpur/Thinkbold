import { PenIcon, Trash2Icon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import formatCustomDate from '../lib/util'
import axios from 'axios'
import toast from 'react-hot-toast'
import api from '../lib/axios'

const Notes = ({note,Notes}) => {
  const handledelete = async(e,id)=>{
      e.preventDefault();
      if(!window.confirm("Are you sure You want to delete")) return;

      try{
         await api.delete(`/notes/${id}`);
         toast.success("Note Deleted Succcesfully")
         Notes((prev)=>prev.filter(note=> note._id !==id))
      }catch(err){
         toast.error("Error Ocuured");
      }
  }
  return (
    <div className='rounded-2xl card w-75 bg-base-100 card-sm shadow-sm '>
        <div className='card-body border-b-2 border-t-2 rounded-2xl text-accent '>
            <h3 className='card-title text-amber-100'>{note.title}</h3>
            <p className='line-clamp-3  text-amber-100'>{note.content}</p>
            <div className='card-actions justify-between items-center mt-2  text-zinc-300'>
                <span className=''>
                  {formatCustomDate(note.createdAt)}
                </span>
                <div className='flex items-center gap-3'>
                  <Link to={`/notes/${note._id}`}> <button  className='btn btn-ghost' ><PenIcon className='size-4  '/></button></Link>
                 
                    <button className='btn btn-ghost'>
  <Trash2Icon onClick={e => handledelete(e, note._id)} className='size-4'/>
</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Notes