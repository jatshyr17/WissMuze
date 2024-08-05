import React, { useState, useContext } from 'react';
import Navbar from './Navbar';
import { albumsData, songsData } from '../assets/assets';
import { useParams } from 'react-router-dom';
import { assets } from '../assets/assets';
import { Playercontext } from '../context/Playercontext';

function DisplayAlbum() {
  const { id } = useParams();
  const albumData = albumsData[id];
  const { playWithId } = useContext(Playercontext);

  const [songBookmarks, setSongBookmarks] = useState(
    Array(songsData.length).fill(false)
  );

  const handleBookmark = (songIndex) => {
    setSongBookmarks((prevBookmarks) => {
      const updatedBookmarks = [...prevBookmarks];
      updatedBookmarks[songIndex] = !updatedBookmarks[songIndex];
      return updatedBookmarks;
    });
  };

  return (
    <>
      <Navbar />
      <div className="mt-10 flex flex-col md:flex-row md:items-end gap-8 border-b-4 border-gray-300">
        <img className="w-48 rounded" src={albumData.image} alt="" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">{albumData.name}</h2>
          <h4 className="text-gray-600">{albumData.desc}</h4>
          <p className="mt-1">
            <img className="inline-block w-5" src={assets.spotify_logo} alt="" />
            <span className="font-bold">WissMuze</span>
            <span> • 1,323,154 likes • 7 songs, about 2 hr 30 min</span>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-5 mt-10 mb-4 pl-2">
        <p className="text-gray-600">
          <span className="mr-4">#</span>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="m-auto w-4" src={assets.clock_icon} alt="" />
        <div className="inline-block">
          <p className="text-gray-600">
            <img className="inline-block w-5" src={assets.bookmark_icon} alt="" />
            Bookmark
          </p>
        </div>
      </div>
      <hr />
      {songsData.map((item, songIndex) => (
        <div
          key={songIndex}
          className={`grid grid-cols-3 sm:grid-cols-5 gap-2 p-2 items-center text-gray-600 hover:bg-gray-300 cursor-pointer rounded-md ${songBookmarks[songIndex] ? 'bg-blue-500' : ''}`} // Add active class for bookmarked songs
        >
          <div onClick={() => playWithId(item.id)}>
            <p className="text-gray-600">
              <span className="mr-4">{songIndex + 1}</span>
              <img className="inline w-10 mr-5" src={item.image} alt="" />
              {item.name}
            </p>
          </div>
          <p className="text-[15px]">{albumData.name}</p>
          <p className="text-[15px] hidden sm:block">5 days ago</p>
          <p className="text-[15px] text-center">{item.duration}</p>
          <img
            onClick={() => handleBookmark(songIndex)}
            className="w-5 cursor-pointer"
            src={songBookmarks[songIndex] ? assets.bookmark1_icon : assets.bookmark_icon} // Conditional image source
            alt=""
          />
        </div>
      ))}
    </>
  );
}

export default DisplayAlbum;
