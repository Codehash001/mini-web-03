import React from "react";
import FAQs from "../components/FAQs";

function Midcontent() {
  return (
    <div className="flex flex-row justify-center items-center md:px-16 px-6 py-8 text-white">
    
  <div className='w-full flex flex-col items-center justify-between overflow-hidden my-4'> 
  <div class="w-screen p-4 bg-blue-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mt-16">
  <div className='w-auto h-auto'>
  <img src='/skelee-head-footer.png'/>
  <img src='/skelee-head-footer.png'/>
  <img src='/skelee-head-footer.png'/>
  <img src='/skelee-head-footer.png'/>
  <img src='/skelee-head-footer.png'/>
  <img src='/skelee-head-footer.png'/>
  <img src='/skelee-head-footer.png'/>
  <img src='/skelee-head-footer.png'/>
  <img src='/skelee-head-footer.png'/>
  <img src='/skelee-head-footer.png'/>
  </div>
  </div>
      <div className="text-center flex flex-col items-center font-Kanit w-full">
        <h1 className="text-white text-sm md:text-[40px] mt-10">Collection Name</h1>
        <h1 className="text-white text-sm md:text-[20px] mt-5">Some text some text</h1>
   
    <div class="w-screen p-4 bg-blue-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mt-10">
  <div className='w-auto h-auto'>
  <img src='/skelee-head-footer.png'/>
  <img src='/skelee-head-footer.png'/>
  <img src='/skelee-head-footer.png'/>
  <img src='/skelee-head-footer.png'/>
  <img src='/skelee-head-footer.png'/>
  <img src='/skelee-head-footer.png'/>
  <img src='/skelee-head-footer.png'/>
  <img src='/skelee-head-footer.png'/>
  <img src='/skelee-head-footer.png'/>
  <img src='/skelee-head-footer.png'/>
  </div>
  </div>
  
  <FAQs/>
       
        <button className='text-white font-semibold bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 rounded-md text-sm p-6 text-center'>
        View On opensea
        </button>
      </div>
    </div>
  );
}

export default Midcontent;
