<<<<<<< HEAD
import React from 'react'
import { SparklesCore } from '../../../components/aceternity/sparkles'
import { LampContainer } from '../../../components/aceternity/lamp'
import { motion } from 'framer-motion'
import FlowingMenu from '../../../components/reactBits/FlowingMenu'
import ScrollVelocity from '../../../components/reactBits/ScrollVelocity'
=======
import React from "react";
import { SparklesCore } from "../../../components/aceternity/sparkles";
import { LampContainer } from "../../../components/aceternity/lamp";
import { motion } from "framer-motion";
import FlowingMenu from "../../../components/reactBits/FlowingMenu";
>>>>>>> 154c4c14270e8a77f458778128b0edb7898fa360

const Sponsers = () => {
  const demoItems = [
    {
      link: "#",
      text: "Mojave",
      image: "https://picsum.photos/600/400?random=1",
    },
    {
      link: "#",
      text: "Sonoma",
      image: "https://picsum.photos/600/400?random=2",
    },
    {
      link: "#",
      text: "Monterey",
      image: "https://picsum.photos/600/400?random=3",
    },
    {
      link: "#",
      text: "Sequoia",
      image: "https://picsum.photos/600/400?random=4",
    },
  ];

<<<<<<< HEAD
    const demoItems = [
        { link: '#', text: 'Mojave', image: 'https://picsum.photos/600/400?random=1' },
        { link: '#', text: 'Sonoma', image: 'https://picsum.photos/600/400?random=2' },
        { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
        { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }
    ];

    return (
        <section id='sponsers' className=' my-20'>
            
            {/* <div style={{ height: '400px', position: 'relative' }}>
                <FlowingMenu items={demoItems} />
            </div> */}
            <ScrollVelocity
                texts={[' React Bits | ', ' Scroll Down | ']}
                // velocity={20}
                className="custom-scroll-text text-white"
            />
           
=======
  return (
    <section id="sponsers" className=" my-20">
      {/* <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
                <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
                    Aceternity
                </h1>
                <div className=" w-full text-center h-40 relative">
                    Gradients
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                    Core component
                    <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={1200}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />

                    Radial Gradient to prevent sharp edges
                    <div className="absolute inset-0 w-full h-full  [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                </div>
            </div> */}
      <div style={{ height: "400px", position: "relative" }}>
        <FlowingMenu items={demoItems} />
      </div>
    </section>
  );
};
>>>>>>> 154c4c14270e8a77f458778128b0edb7898fa360

export default Sponsers;
