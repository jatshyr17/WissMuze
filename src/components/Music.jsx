import React from 'react'
import Navbar from './Navbar'
import Albumitem from './Albumitem'
import Songitem from './Songitem'
import { albumsData,songsData } from '../assets/assets'

const Music = () => {
  return (
    <>
    <Navbar/>
   <div className='mb-4 cursor-pointer'>
    <h1 className='my-5 font-bold text-2xl'>Underrated Albums</h1>
    <div className='flex overflow-auto'>
    {albumsData.map((item,index)=>(<Albumitem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
    </div>
    </div>
    <div className='mb-4 cursor-pointer'>
    <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
    <div className='flex overflow-auto'>
    {songsData.map((item,index)=>(<Songitem key={index} name={item.name} artistname={item.artistname} id={item.id} image={item.image}/> ))}
    </div>
   </div>
    
    
    
   </>
  )
}

export default Music