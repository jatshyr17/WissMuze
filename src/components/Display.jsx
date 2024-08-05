import React,{ useEffect,useRef} from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'

import Profile from './Profile'
import { albumsData } from '../assets/assets'
import Music from './Music'
import Hardcore from './Hardcore'
import Rnb from './Rnb'
import Gngsta from './Gngsta'
import Lofi from './Lofi'

function Display() {
  const displayRef = useRef();
  const loc = useLocation();
  const isAlbum = loc.pathname.includes("album");
  const albumid = isAlbum? loc.pathname.slice(-1):"";
  const bgColor = albumsData[Number(albumid)].bgColor;

  useEffect(()=>{
    if(isAlbum){
    displayRef.current.style.background = '#eaedec'
  }
  else{
    displayRef.current.style.background = '#eaedec'

  }})
  
  return (
    <div ref={displayRef} className ='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-gray-600 overflow-auto lg:w-[80%] h-[100%]' >
      <Routes>
        <Route path='/' element = {<DisplayHome/>}/>
        <Route path='/album/:id' element={<DisplayAlbum/>}/>
        <Route path='/music' element={<Music/>}/>
        
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/hardcore' element={<Hardcore/>}/>
        <Route path ='/lofi' element={<Lofi/>}/>
        <Route path='/rnb' element ={<Rnb/>}/>
        <Route path='/gngsta' element={<Gngsta/>}/>
      </Routes>
    </div>
  )
}

export default Display