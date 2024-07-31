import React, { useContext,useState,useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import { assets } from './assets/assets'
import Display from './components/Display'
import { Playercontext } from './context/Playercontext'



function App() {
  const{audioRef,track}=useContext(Playercontext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Replace 2000 with actual loading time
  }, []);

  return (
    
    <div className='bg-blue-950 flex justify-center items-center h-screen'>
    {isLoading ? (
        <div className="text-center">
          <img src={assets.spotify_logo} alt="Loading..." className="max-w-[100px]" />
        </div>
      ) : (
      <>
    <div className='bg-blue-950 w-screen h-screen sm:[640px] md:[768px]   '>
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
      )}
    </div>
  );
}

export default App
