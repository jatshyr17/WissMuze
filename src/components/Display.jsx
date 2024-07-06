import React,{ useEffect,useRef} from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'

function Display() {
  const displayRef = useRef();
  const loc = useLocation();
  const isAlbum = loc.pathname.includes("album");
  const albumid = isAlbum? loc.pathname.slice(-1):"";
  const bgColor = albumsData[Number(albumid)].bgColor;

  useEffect(()=>{
    if(isAlbum){
    displayRef.current.style.background = `linear-gradient(${bgColor},lightblue)`
  }
  else{
    displayRef.current.style.background = `linear-gradient(${bgColor},lightblue)`

  }})
  
  return (
    <div ref={displayRef} className ='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-yellow-50 overflow-auto lg:w-[75%]'>
      <Routes>
        <Route path='/' element = {<DisplayHome/>}/>
        <Route path='/album/:id' element={<DisplayAlbum/>}/>
      </Routes>
    </div>
  )
}

export default Display