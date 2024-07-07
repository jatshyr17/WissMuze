import React from 'react'
import Navbar from './Navbar'
import Albumitem from './Albumitem'
import Songitem from './Songitem'
import { albumsData, podCasts, songsData } from '../assets/assets'
import Poditems from './Poditems'

function DisplayHome() {
  return (
   <>
   <Navbar/>
   <div className='mb-4'>
    <h1 className='my-5 font-bold text-2xl'>Underrated Albums</h1>
    <div className='flex overflow-auto'>
    {albumsData.map((item,index)=>(<Albumitem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
    </div>
    </div>
    <div className='mb-4'>
    <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
    <div className='flex overflow-auto'>
    {songsData.map((item,index)=>(<Songitem key={index} name={item.name} artistname={item.artistname} id={item.id} image={item.image}/> ))}
    </div>
   </div>
    
    <div className='mb-4'>
    <h1 className='my-5 font-bold text-2xl'>Some podcasts you may also like</h1>
    <div className='flex overflow-auto'>
    {podCasts.map((item,index)=>(<Poditems key={index} name={item.name} filename={item.filename} id={item.id} image={item.image}/> ))}
    </div>
    </div>
   
   </>
  )
}

export default DisplayHome