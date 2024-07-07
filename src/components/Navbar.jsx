import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function Navbar() {
   const navigate = useNavigate();
   const{user,loginWithRedirect,isAuthenticated,logout} = useAuth0();
   console.log("Current User" , user);
    
  return (
    <>
    <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
            <img onClick={()=>navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt=''/>
            <img onClick={()=>navigate(+1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt=''/>

        </div>
        <div className='flex items-center gap-4'>
            <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>
                Explore Artists        </p>
                <p onClick={()=>navigate('/bio')}className='bg-black py-1 px-4 rounded-2xl text-[15px] cursor-pointer md:block'>Bio Of Legends</p>
                { isAuthenticated ? ( <button onClick={(e)=>logout()} className='bg-black py-1 px-3 rounded-2xl text-white text-[15px]  flex items-center justify-center cursor-pointer' >Log Out</button>):( <button onClick={(e)=> loginWithRedirect()}className='bg-black py-1 px-3 rounded-2xl text-white text-[15px]  flex items-center justify-center cursor-pointer'>Log In</button>)}
                
             
        </div>
    </div>
    <div className=' flex items-center gap-2 mt-4'>
        <p className='bg-white text-black px-4 py-1 rounded-2xl cursor pointer'>All</p>
        <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
        <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</p>
    </div>
    </>
  )
}

export default Navbar