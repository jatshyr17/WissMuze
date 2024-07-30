 import React from 'react'
 import { assets } from '../assets/assets'
 
 import { useNavigate } from 'react-router-dom'
 
 
 function Sidebar({id}) {
  
   const navigate = useNavigate()
   return (
      
     <div className='lg:w-[20%] sm:w-[2%] md:flex  h-full p-2 flex-col  gap-2 text-white '>
        <div className='bg-blue-950 h-[15%] rounded flex flex-col justify-around gap-4'>
            <div  onClick={()=>navigate("/")} className='flex items-center gap-3 pl-8 cursor-pointer mt-2 text-slate-300 hover:text-white'>
                <img className="w-6 " src={assets.home_icon} alt="" />
                <p  className='font-bold hidden lg:flex'>Home</p>
            </div>
            <div onClick={()=>navigate("/profile")} className='flex items-center gap-3 pl-8 cursor-pointer mb-1 text-slate-300 hover:text-white'>
                <img className='w-6' src={assets.search_icon} alt=''></img>
                <p className='font-bold hidden lg:flex'>Profile</p>
            </div>
          </div>
        <div className='h-[85%] rounded'>
          <div className='p-4 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <img className='w-8' src={assets.stack_icon} alt=''/>
              <p className='font-semibold hidden lg:flex' >Your CulHub</p>
            </div>
           
            </div>
            <div className='p-4 bg-[#2e3661] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
              <h1 >Create your first playlist</h1>
              <p className='font-light'>it's easy we will help you</p>
              <button className='px-4 py-1.5 bg-white text-[15px]  text-black rounded-full mt-4 flex items-center gap-1'>
                <img src={assets.playlist_icon} alt="icon" className='w-5' /><p className='hidden lg:flex md:hidden '>Create Playlist</p></button>
            </div> 
           </div>
           </div>
          )
 }
 
 export default Sidebar
