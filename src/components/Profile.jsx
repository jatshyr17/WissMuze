import React from 'react'
import Navbar1 from './Navbar1'
import { assets } from '../assets/assets'

function Profile() {
  
  return (
    <>
    <Navbar1/>
    <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end border-b-4 border-gray-300  '>
    
    <img className='w-48 rounded mb-3 cursor-pointer'src={assets.profile} alt=""/>
        <div className='flex flex-col'>
          
            
            <h2 className='text-7xl font-bold mb-4 md:text-7xl text-gray-600 font-'>Jatin</h2>
            
            <p className='mt-1 text-gray-600 mb-3'>
                

                <b>22 followers</b>
                •7 bookmarked songs
                
                
                </p>
        </div>
    </div>
    <div 
 className=' mt-10 grid grid-rows-3 gap-y-2 mb-4 pl-2 text-gray-500 cursor-pointer'>
          <p className='text-gray-600 hover:bg-gray-300 rounded-xl h-7 pb-1'><img className='inline-block w-5'src={assets.bookmark1_icon} alt="" />
          Bookmark</p>
          <p className='text-gray-600 hover:bg-gray-300 rounded-xl h-7 pb-1 '><img className='inline-block w-5'src={assets.playlist_icon} alt="" />Playlists</p>
    </div>
    <hr/>
    
    </>
  )
}

export default Profile