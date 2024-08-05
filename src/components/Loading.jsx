import React from 'react';
import { assets } from '../assets/assets';// Replace with the path to your logo image

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-black">
      <img src={assets.spotify_logo} alt="App Logo" className="w-24 h-24" />
    </div>
  );
};

export default Loading;