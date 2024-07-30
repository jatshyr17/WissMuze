import React,{useContext,useEffect} from 'react'
import { assets } from '../assets/assets'

import { Playercontext } from '../context/Playercontext';

function Player() {
    const {track,seekBar,seekBg,playStatus,play,
        seekSong,pause,time,previous,next} = useContext(Playercontext);

        useEffect(() => {
            const handleKeyDown = (event) => {
              if (event.code === 'Space') {
                event.preventDefault(); // Prevent default spacebar behavior
                playStatus ? pause() : play();
              } else if (event.code === 'ArrowLeft') {
                previous();
              } else if (event.code === 'ArrowRight') {
                next();
              }
            };
        
            window.addEventListener('keydown', handleKeyDown);
            return () => window.removeEventListener('keydown', handleKeyDown);
          }, [playStatus, play, pause, previous, next]);
        
  return (
    <div className=' border-t-2  border-blue-900 flex justify-between items-center text-white px-4 py-2 grid-cols-3 position:fixed z-999 '>
        <div className='hidden lg:flex items-center gap-4'>
            <img className='w-12' src={track.image} alt=''/>
            <div className=' overflow-hidden'>
                <p className='truncate'>{track.name}</p>
                <p className='truncate'>{track.artistname}</p>
            </div>
        </div>
        <div className='flex flex-col items-center gap-1 m-auto z-10 position:absolute '>
            <div className='flex gap-4'>
            <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt=""/>
            <img onClick={previous}className='w-4 cursor-pointer' src={assets.prev_icon} alt=""/>
            { playStatus? <img onClick={pause}className='w-4 cursor-pointer' src={assets.pause_icon} alt=""/>: <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt=""/>}
           
          
            <img onClick={next}className='w-4 cursor-pointer' src={assets.next_icon} alt=""/>
            <img className='w-4 cursor-pointer' src={assets.loop_icon} alt=""/>
            </div>
            < div className='flex items-center gap-5'>
            <p>{time.currentTime.minute}:{time.currentTime.second}</p>
            <div ref={seekBg} onClick={seekSong}className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                <hr ref={seekBar} className='h-1 border-none w-10 bg-green-800 rounded-full'/></div>
                <p>{time.totalTime.minute}:{time.totalTime.second}</p>
            </div>
        </div>
        <div className='hidden lg:flex items-center gap-2 opacity-75'>
           
           
            <img className='w-4'src={assets.queue_icon} alt=""/> 
            <img className='w-4' src={assets.speaker_icon} alt=""/>
            <img className='w-4' src={assets.volume_icon} alt=""/>
            <div className='w-20 bg-slate-50 h-1 rounded'>

            </div>
            
           

        </div>
    </div>
  )
}

export default Player
