import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[10%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-sm w-1/4 ">{overview}</p>
      <div className="">
        <button className="bg-white text-black p-4 rounded-lg px-8 text-xl hover:bg-opacity-80 ">
          Play
        </button>
        <button className="bg-gray-900 text-white p-4 rounded-lg px-8 text-xl bg-opacity-45 mx-2">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
