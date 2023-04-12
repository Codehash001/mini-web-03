import React from "react";

function header() {
  return (
    <div className="flex flex-row justify-center items-center md:px-16 px-6 py-8 text-white" id ='head'>
      <div className="text-center flex flex-col items-center font-Kanit w-full">
        <h1 className="text-white text-sm md:text-[40px] mt-16">Collection Name</h1>
        <h1 className="text-white text-sm md:text-[20px] my-5">Tagline</h1>
        
        <button className='text-white font-semibold bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 rounded-md text-sm p-6 text-center'>
        View On opensea
        </button>
      </div>
    </div>
  );
}

export default header;