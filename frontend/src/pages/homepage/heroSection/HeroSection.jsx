import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import parakramFont from '/parakram font.png';

const HeroSection = ({ setisLoaded }) => {
    const heroRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {

        gsap.fromTo(imgRef.current , {
            scale:3,
            opacity:0,
        },{
            scale:1,
            opacity:1,
            duration:2,
            ease:"elastic.out(1,0.8)"
        })
    }, []);

    return (
        <section
            id='hero-section'
            ref={heroRef}
            className={`relative w-full overflow-x-hidden min-h-[400px] my-[60px] p-2`}
            style={{ height: `${window.innerHeight - 50}px` }}
            data-carousel="slide"
        >
            <div className='w-full h-full flex justify-center items-center overflow-hidden'>
                <img
                    ref={imgRef}
                    src={parakramFont}
                    alt="PARAKRAM"
                    className='w-fit h-fit mx-auto'
                />
            </div>
        </section>
    );
};

export default HeroSection;