import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import parakramFont from '/parakram font.png';
import SplitText from '../../../components/reactBits/SplitText';

const HeroSection = ({ setisLoaded }) => {
    const heroRef = useRef(null);
    const imgRef = useRef(null);
    const imgCaptionRef = useRef(null);

    useEffect(() => {

        gsap.fromTo(imgRef.current, {
            scale: 3,
            opacity: 0,
        }, {
            scale: 1,
            opacity: 1,
            duration: 2,
            ease: "elastic.out(1,0.8)"
        })

    }, []);

    return (
        <section
            id='hero-section'
            ref={heroRef}
            className={`relative w-full overflow-hidden min-h-[400px] my-[60px] p-2`}
            style={{ height: `${window.innerHeight - 50}px` }}
            data-carousel="slide"
        >
            {/* <div className='w-full h-full flex justify-center items-center overflow-hidden'>
                <img
                    ref={imgRef}
                    src={parakramFont}
                    alt="PARAKRAM"
                    className='w-fit h-fit mx-auto'
                />
            </div> */}
            <div className="relative group flex justify-center items-center w-full h-full overflow-hidden">
                {/* PNG Image with Infinite Glow */}
                <div  className=' md:w-8/12 w-11/12 h-auto'>
                    <img
                        ref={imgRef}
                        src={parakramFont}
                        alt="Glowing Image"
                        className="relative z-10 w-full object-center object-cover " //animate-glow
                    />
                    {/* <div ref={imgCaptionRef} className=' text-white'>THE SPORTS FEST OF IIT (ISM) DHANBAD</div> */}
                    <div className='text-center'>
                    <SplitText
                        text="THE SPORTS FEST OF IIT (ISM) DHANBAD"
                        className=" text-2xl font-semibold text-center py-10 text-white"
                        delay={150}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        easing="easeOutCubic"
                        threshold={0.2}
                        rootMargin="-50px"
                        loop = {true}
                    />
                    </div>
                    
                </div>

            </div>

        </section>
    );
};

export default HeroSection;

