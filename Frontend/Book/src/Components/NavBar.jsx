 import React from 'react'
import { Link } from 'react-router'
 import {PlusIcon} from 'lucide-react'
 const NavBar = () => {
   return (
     <>
     <header className='bg-base-100 border-b border-base-content/15'>
        <div className='mx-auto max-w-6xl p-4'>
          <div className='flex items-center justify-between font-extrabold '>
            <h1 className='font-extrabold tracking-tighter text-3xl text-amber-100'>
                THINKBOLD
            </h1>
            <div className='flex items-center gap-4 font-extrabold text-zinc-950'>
             <Link to={'/create'} className='btn btn-accent'>
             <PlusIcon className="size-5  font-extrabold text-zinc-950"></PlusIcon>
             <span className='font-extrabold text-zinc-950'>New Note</span>
             </Link>
             
            </div>
          </div>
        </div>
     </header>
     </>
   )
 }
 
 export default NavBar