import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import NavBar from '../Components/NavBar'
import RateLimit from '../Components/RateLimit'
import axios from "axios"
import Loader from '../Components/Loader'
import Notes from '../Components/Notes'
import api from '../lib/axios'
const Hompage = () => {
     const [ratelimit,setratelimit] = useState(false);
     const [notes,setNotes] = useState([]);
     const [loading,setloading] = useState(true);
     useEffect(()=>{
        const fetchNotes = async()=>{
            try{
              const res = await api.get("/notes")
              console.log(res.data);
              setNotes(res.data);
              setratelimit(false);
            }catch(err){
              console.log("Error in fetching the Notes")
              if(err.response.data==='Wait'){
                setratelimit(true);
              }else{
                toast.error("Failed to Load")
              }
            } finally{
                setloading(false);
            }
        }
        fetchNotes();
     },[])
     useEffect(()=>{console.log("updated")},[Notes])
  return (
    <div className='min-h-screen  bg-zinc-950'>
        <NavBar/>
        {ratelimit && < RateLimit/>}
       
        {loading && ( <div className="max-w-7xl mx-auto h-90 flex justify-around items-center"><Loader/>   </div>)}
        <div className="max-w-7xl mx-auto p-4 mt-1 flex justify-around items-center-safe">
        {notes.length === 0 && !loading && !ratelimit && (
    <div className="h-90 font-extrabold text-accent text-5xl flex justify-center items-center animate-bounce animate-fade-in">
    NOTHING
   </div>
)}
        {!loading && !ratelimit && notes.length > 0 && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 text-amber-100'>
            {notes.map(note => (
              <Notes key={note._id || note.id} note={note} Notes={setNotes}/>
            ))}
          </div>
        )}
      </div>
       
    </div>
  )
}

export default Hompage