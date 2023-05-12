import { useState, Fragment } from "react";
import Footer from "../components/footer";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Link } from "react-scroll";
 
export default function FAQs() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  const customAnimation = {
    mount: { opacity:1 },
    unmount: { opacity:0 },
  };
 
  return (
  <div className='w-screen h-screen md:mb-0 font-Kanit relative space-y-20 pt-10'>
      <h1 className="text-center text-7xl font-bold tracking-wide text-white">FAQ</h1>

    <div id='faqs'className='md:px-16 px-4 text-white flex flex-col items-center'>
      <Accordion open={open === 1} animate={customAnimation}>
        <AccordionHeader className='w-full flex flex-col items-start text-start mx-[-10px] border-b border-white text-[21px]'>
          <div className="w-full flex justify-between">
            <h1 className='uppercase'>What is Turbo Toad NFT?</h1>
            <div>{open == 1 ?
            (
              <svg onClick={() => handleOpen(1)}  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M5 11h14v2H5z"></path></svg>
            ):
            (
            <Link onClick={() => handleOpen(1)}  activeClass ="active" to='footer' spy={true} smooth={true} offset={-70} duration={600}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
            </Link>
            )
             }</div>
          </div>
        </AccordionHeader>
        <AccordionBody className='text-justify'>
         <p className={open==1? 'md:pr-4' : 'h-0 hidden'}>
         Ans
         </p>
        </AccordionBody>
      </Accordion>


      <Accordion open={open === 2} animate={customAnimation}>
        <AccordionHeader className='w-full flex flex-col items-start text-start mx-[-10px] border-b border-white text-[21px]'>
          <div className="w-full flex justify-between">
            <h1 className='uppercase'>What are the Official Collection Links for Turbo Toad NFT?</h1>
            <div>{open == 2 ?
            (
              <svg onClick={() => handleOpen(2)}  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M5 11h14v2H5z"></path></svg>
            ):
            (
              <Link onClick={() => handleOpen(2)}  activeClass ="active" to='footer' spy={true} smooth={true} offset={-70} duration={600}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
              </Link>            )
             }</div>
          </div>
        </AccordionHeader>
        <AccordionBody className='flex flex-col items-start'>
         <p className={open==3? 'md:pr-4' : 'h-0 hidden'}>
          Ans
         </p>
        </AccordionBody>
      </Accordion>

      
      <Accordion open={open === 2} animate={customAnimation}>
        <AccordionHeader className='w-full flex flex-col items-start text-start mx-[-10px] border-b border-white text-[21px]'>
          <div className="w-full flex justify-between">
            <h1 className='uppercase'>What are the Official Collection Links for Turbo Toad NFT?</h1>
            <div>{open == 2 ?
            (
              <svg onClick={() => handleOpen(2)}  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M5 11h14v2H5z"></path></svg>
            ):
            (
              <Link onClick={() => handleOpen(2)}  activeClass ="active" to='footer' spy={true} smooth={true} offset={-70} duration={600}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
              </Link>            )
             }</div>
          </div>
        </AccordionHeader>
        <AccordionBody className='flex flex-col items-start'>
         <p className={open==3? 'md:pr-4' : 'h-0 hidden'}>
          Ans
         </p>
        </AccordionBody>
      </Accordion>

      
      <Accordion open={open === 2} animate={customAnimation}>
        <AccordionHeader className='w-full flex flex-col items-start text-start mx-[-10px] border-b border-white text-[21px]'>
          <div className="w-full flex justify-between">
            <h1 className='uppercase'>What are the Official Collection Links for Turbo Toad NFT?</h1>
            <div>{open == 2 ?
            (
              <svg onClick={() => handleOpen(2)}  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M5 11h14v2H5z"></path></svg>
            ):
            (
              <Link onClick={() => handleOpen(2)}  activeClass ="active" to='footer' spy={true} smooth={true} offset={-70} duration={600}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
              </Link>            )
             }</div>
          </div>
        </AccordionHeader>
        <AccordionBody className='flex flex-col items-start'>
         <p className={open==3? 'md:pr-4' : 'h-0 hidden'}>
          Ans
         </p>
        </AccordionBody>
      </Accordion>
      </div>
      <div className="w-screen flex flex-col items-center space-y-10">
      <a>
      <button className="bg-gradient-to-r from-orange-700 via-orange-500 to-orange-400 hover:bg-gradient-to-r hover:from-orange-400 hover:via-orange-500 hover:to-orange-700 px-8 py-4 rounded-3xl flex justify-center items-center">
        <h1 className="text-white font-semibold text- text-2xl">View On Opensea</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" className="fill-white"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>
      </button>
      </a>
      
      <h1 className="text-white font-semibold text- text-xl text-center">
        This is an Web3 Experience
        <br/>
        Created by Dexx and The Internet Gallery
      </h1>

      </div>
      
    </div>
  );
}
