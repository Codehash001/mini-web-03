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
        <title>Mini Web template</title>
        <meta name="Description" content="template" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      
        <div className="h-screen w-screen fixed top-0 -z-10 bg-cover bg-blue-800 bg-center">

        </div>
        {/* <img
          src="/rarestudiosnewyork-sitebg.png"
          className="h-screen md:w-screen w-auto fixed top-0 -z-10"
        /> */}
        <div className="relative h-screen w-screen flex flex-col">

          <Header/>
        </div>
        
        <div>
        <Midcontent/>
          <Footer/>
        </div>
    </>
  );
}
