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
  <div className='w-screen h-auto md:mb-0 font-Kanit'>
    <div id='faqs'className='md:px-16 px-4 py-4 bg-black/30 filter backdrop-blur-sm text-white'>
      <Accordion open={open === 1} animate={customAnimation}>
        <AccordionHeader className='w-full flex flex-col items-start text-start mx-[-10px] border-b border-white text-[21px]'>
          <div className="w-full flex justify-between">
            <h1 className='uppercase'>Question</h1>
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


      <Accordion open={open === 3} animate={customAnimation}>
        <AccordionHeader className='w-full flex flex-col items-start text-start mx-[-10px] border-b border-white text-[21px]'>
          <div className="w-full flex justify-between">
            <h1 className='uppercase'>Qewstion</h1>
            <div>{open == 3 ?
            (
              <svg onClick={() => handleOpen(3)}  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M5 11h14v2H5z"></path></svg>
            ):
            (
              <Link onClick={() => handleOpen(3)}  activeClass ="active" to='footer' spy={true} smooth={true} offset={-70} duration={600}>
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


      
      <Accordion open={open === 2 || 4} animate={customAnimation}>
        <AccordionHeader className='w-full flex flex-col items-start text-start mx-[-10px] border-b border-white text-[21px]'>
          <div className="w-full flex justify-between">
            <h1 className='uppercase'>FAQ</h1>
            <div>{open == 2 ?
            (
              <svg onClick={() => handleOpen(2)}  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M5 11h14v2H5z"></path></svg>
            ):
            (
              <Link onClick={() => handleOpen(2)}   activeClass ="active" to='footer' spy={true} smooth={true} offset={-70} duration={600}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-white"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
              </Link>            )
             }</div>
          </div>
        </AccordionHeader>
        <AccordionBody className='text-start'>

          {/* FAQ Sub section */}
          <p className={open==2?'md:pr-4':'h-0 hidden'}>

            <span className='text-gray-100 text-[20px]'>What is the supply of the project?</span><br/>
            <span className='text-gray-300'>4,444  NFTs</span><br/><br/>

            <span className='text-gray-100 text-[20px]'>What is the mint price?</span><br/>
            <span className='text-gray-300'>TBD</span><br/><br/>

            <span className='text-gray-100 text-[20px]'>When will the mint take place?</span><br/>
            <span className='text-gray-300 '>March 2023</span><br/><br/>

            <span className='text-gray-100 text-[20px]'>Why choose Ethereum?</span><br/>
            <span className='text-gray-300'>
              Its smart contracts enable fast and secure in-game transactions. The network's decentralizedstructure ensures fairness and transparency in gameplay. Ethereum's open-source platformallows for easy development of new games. Thus,  the ability to use Ethereum's nativecryptocurrency, ether, allows for easy, borderless payments.
            </span>
          </p> 
        </AccordionBody>
      </Accordion>
 

      
      


      </div>
    </div>
  );
}
