 import React from 'react'
 import { assets } from '../assets/assets'

 import { Link } from 'react-router-dom'
 
 function Sidebar() {
  
   
   return (
     <div className='w-[25%] h-[100%] p-2 flex-col gap-2 text-white hidden lg:flex'>
        <div className='bg-[#0a113a] h-[40%] rounded flex flex-col justify-around '>
            <div className='flex items-center gap-3 pl-8 cursor-pointer mt-2 text-slate-300 hover:text-white'>
                <img className="w-6" src={assets.home_icon} alt="" />
                <p className='font-bold'>Home</p>
            </div>
            <div className='flex items-center gap-3 pl-8 cursor-pointer mb-1'>
                <img className='w-6' src={assets.search_icon} alt=''></img>
              <input id='search' type='search' placeholder='Songs and Podcasts..' className=' w-[180px] rounded-2xl px-2 text-black outline-none p-1 '/>
            </div>
        </div>
        <div className='bg-[#0a113a] h-[85%] rounded'>
          <div className='p-4 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <img className='w-8' src={assets.stack_icon} alt=''/>
              <p className='font-semibold' >Your CulHub</p>
            </div>
            <div className='flex items-center gap-3'>
              <img className='w-5' src={assets.arrow_icon} alt=''/>
              <img className='w-5' src={assets.plus_icon} alt=''/>


            </div>
            </div>
            <div className='p-4 bg-[#2e3661] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
              <h1>Create your first playlist</h1>
              <p className='font-light'>it's easy we will help you</p>
              <button className='px-4 py-1.5 bg-white text-[15px]  text-black rounded-full mt-4'>Create Playlist</button>
            </div>
            <div className='p-4 bg-[#2e3661] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
              <h1>Do you want to make your own podcasts?</h1>
              <p className='font-light'>if yes then you can use our studio feature</p>
              <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Podcast Studios</button>
            </div>
            <div className='p-4 bg-[#2e3661] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
              <h1>Want to explore the history of HipHop</h1>
              <p className='font-light'>This is for the all people who are in love with this culture</p>
              <Link to='/'><button  className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>History of HipHop</button></Link>
              
            </div>
          </div>
        </div>
     
     
   )
 }
 
 export default Sidebar