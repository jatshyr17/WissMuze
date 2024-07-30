import React from 'react'
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
const Navbar1 = () => {
    const navigate = useNavigate();
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

               
                
               
               <button className='bg-black py-1 px-3 rounded-full text-white text-[15px]  flex items-center justify-center cursor-pointer'>j</button>

             
        </div>
        </div>
  
    </>
  )
}

export default Navbar1