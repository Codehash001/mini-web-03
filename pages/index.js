import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer";
import FAQ from "../components/FAQs";
import Header from "../components/header";
import Midcontent from "../components/midcontent";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";

export default function Index() {

const [ArrowClicked , setArrowClicked ] = useState(false)

const ArrowClickedHnadler= () => {
    setArrowClicked(!ArrowClicked);
  };

  return (
    <>
      <Head>
        <title>Turbo Toads NFTs</title>
        <meta name="Description" content="template" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      
        <div className="min-h-screen w-screen bg-cover bg-[#ff6000] bg-center md:px-16 md:py-8">
          <div className="flex flex-col items-center">
          <img src='/TurboToads/turbotoadnft-logo.png' className="w-[280px] h-auto"/>
          {/* mint section */}
          <div className="text-xl text-center text-white h-[300px] flex items-center"> Mint section go here </div>
          </div>
        </div>
        <img src='/TurboToads/turbotads-character-banner-1.png' className="w-screen h-auto"/>
        <Midcontent/>
        <img src='/TurboToads/turbotads-character-banner-2.png' className="w-screen h-auto"/>
        <FAQ/>
        <img className='w-screen min-h-screen md:mb-0 font-Kanit Pt-8 bg-bg2 fixed bottom-0 -z-10'
      src="/TurboToads/turbotoadnft-footer-banner.png"/>
    </>
  );
}
