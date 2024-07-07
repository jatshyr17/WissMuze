import React, { useContext } from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'

import Display from './components/Display'
import { Playercontext } from './context/Playercontext'



function App() {
  const{audioRef,track}=useContext(Playercontext);
  return (
    <>
    <div className='bg-blue-950 w-screen h-screen '>
      <div className='h-[90%] flex'>
       
      <Sidebar/>
      <Display/>
        
        
        
      </div>
      
      <Player/>
      <audio ref={audioRef} src={track.file}preload='auto'></audio>
    

    </div>
   
     
    </>
    
  )
}

export default App