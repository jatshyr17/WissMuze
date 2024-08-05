import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const Playercontext = createContext();

const PlayercontextProvider = (props) => {
  const audioRef = useRef(new Audio());
  audioRef.current.autoplay = true;
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [volume, setVolume] = useState(1); // Default volume to 100%
  const [loopEnabled, setLoopEnabled] = useState(false);

  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    }
  });

  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  const playWithId = async (id) => {
    const newTrack = songsData[id];
    setTrack(newTrack);
    audioRef.current.src = newTrack.url; // Set the audio source immediately
    audioRef.current.play();
    setPlayStatus(true);
  };

  const previous = async () => {
    if (track.id > 0) {
      const newTrack = songsData[track.id - 1];
      setTrack(newTrack);
      audioRef.current.src = newTrack.url;
      audioRef.current.play();
      setPlayStatus(true);
    }
  };

  const next = async () => {
    if (track.id < songsData.length - 1) {
      const newTrack = songsData[track.id + 1];
      setTrack(newTrack);
      audioRef.current.src = newTrack.url;
      audioRef.current.play();
    } else if (loopEnabled) {
      // Loop back to the first song if the end is reached and loop is enabled
      const newTrack = songsData[0];
      setTrack(newTrack);
      audioRef.current.src = newTrack.url;
      audioRef.current.play();
    }
  };

  const seekSong = (e) => {
    audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration);
  };

  const changeVolume = (e) => {
    const newVolume = e.target.value;
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const toggleLoop = () => {
    setLoopEnabled(prev => !prev);
  };

  useEffect(() => {
    const handleTimeUpdate = () => {
      if (!audioRef.current) return;

      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration;

      if (!isNaN(duration)) {
        seekBar.current.style.width = (Math.floor(currentTime / duration * 100)) + "%";
        setTime({
          currentTime: {
            second: Math.floor(currentTime % 60),
            minute: Math.floor(currentTime / 60)
          },
          totalTime: {
            second: Math.floor(duration % 60),
            minute: Math.floor(duration / 60)
          }
        });
      }
    };

    const handleEnded = () => {
      if (loopEnabled) {
        // Replay the current track if loop is enabled
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      } else {
        next(); // Move to next track if loop is not enabled
      }
    };

    const audioElement = audioRef.current;
    audioElement.addEventListener('timeupdate', handleTimeUpdate);
    audioElement.addEventListener('ended', handleEnded);

    return () => {
      audioElement.removeEventListener('timeupdate', handleTimeUpdate);
      audioElement.removeEventListener('ended', handleEnded);
    };
  }, [track, loopEnabled, next]); // Include next in the dependency array

  const contextValue = {
    audioRef,
    seekBar, seekBg,
    track, setTrack,
    playStatus, setPlayStatus,
    time, setTime,
    volume, setVolume,
    play, pause,
    playWithId,
    previous, next,
    seekSong,
    changeVolume,
    loopEnabled, toggleLoop
  };

  return (
    <Playercontext.Provider value={contextValue}>
      {props.children}
    </Playercontext.Provider>
  );
};

export default PlayercontextProvider;
