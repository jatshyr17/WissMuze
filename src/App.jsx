<<<<<<< HEAD
import React, { useContext, useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import { assets } from './assets/assets';
import Display from './components/Display';
import { Playercontext } from './context/Playercontext';

function App() {
  const { audioRef, track } = useContext(Playercontext);
  

  return(
    <div className='bg-blue-950 w-screen h-screen sm:[640px] md:[768px]'>
      <div className='h-[90%] flex'>
        <Sidebar />
        <Display />
      </div>
      <div className='mt-2'>
        <Player />
        <audio ref={audioRef} src={track.file} preload='auto'></audio>
      </div>
    </div>
  );
}

export default App;
=======
mport React, { useContext } from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import { assets } from './assets/assets'
import Display from './components/Display'
import { Playercontext } from './context/Playercontext'



function App() {
  const{audioRef,track}=useContext(Playercontext);
  return (
    <>
    <div className='bg-blue-950 w-screen h-screen sm:[640px] md:[768px]  '>
      <div className='h-[90%] flex '>
       
      <Sidebar/>
      <Display/>
       
       
       
      </div>
     
      <div className='mt-2 '>
    <Player/>
    <audio ref={audioRef} src={track.file}preload='auto'></audio>
    </div>
   

    </div>
   
   
     
    </>
   
  )
}

export default App
>>>>>>> 8cadbfc7512abb4b162120713c239c745db9db8e
