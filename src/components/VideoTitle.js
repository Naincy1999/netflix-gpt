import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[10%]  px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-sm w-1/4 ">{overview}</p>
      <div className="md:m-0 my-4">
        <button className="bg-white text-black p-4 rounded-lg px-8 text-xl hover:bg-opacity-80 ">
          Play
        </button>
        <button className="bg-gray-900 hidden md:inline-block text-white p-4 rounded-lg px-8 text-xl bg-opacity-45 mx-2">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
