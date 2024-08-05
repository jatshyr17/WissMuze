import React from 'react'
import Navbar1 from './Navbar1'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function Profile() {
  const navigate = useNavigate();
  return (
    <>
    <Navbar1/>
    <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end border-b-4 border-gray-300  '>
    
    <img className='w-48 rounded mb-3 cursor-pointer'src={assets.profile} alt=""/>
        <div className='flex flex-col'>
          
            
            <h2 className='text-7xl font-bold mb-4 md:text-7xl text-gray-600 font-'>jatshyr</h2>
            
            <p className='mt-1 text-gray-600 mb-3'>
                

                <b>22 followers</b>
                •7 bookmarked songs
                
                
                </p>
        </div>
    </div>
    <div 
 className=' mt-10 grid grid-rows-1 gap-y-2 mb-4 pl-2 text-gray-500 cursor-pointer'>
          <p className='text-gray-600 hover:bg-gray-300 rounded-xl h-7 p-0.25 text-xl'><img className='inline-block w-6'src={assets.bookmark1_icon} alt="" />
          Bookmark</p>
          <div className="container mx-auto grid grid-cols-2 gap-4">
          <div onClick={()=>navigate('/lofi')} className="bg-gradient-to-r from-blue-500 to-green-500 md:bg-gradient-to-l  h-[200px] rounded text-5xl text-white p-6">Lofi</div>
          <div onClick={()=>navigate('/rnb')}className="bg-gradient-to-r from-orange-300 to-red-500 md:bg-gradient-to-l  h-[200px] rounded text-5xl text-white p-6"> Rnb </div>
          <div onClick={()=>navigate('/hardcore')}className="bg-gradient-to-r from-purple-400 to-red-600 md:bg-gradient-to-l  h-[200px] rounded text-5xl text-white p-6  ">Hardcore</div>
         <div onClick={()=>navigate('/gngsta')} className="bg-gradient-to-r from-blue-500 to-violet-500 md:bg-gradient-to-l  h-[200px] rounded text-5xl text-white p-6 ">Gangsta</div>
         </div>
    </div>
    <hr/>
    
    </>
  )
}

export default Profile