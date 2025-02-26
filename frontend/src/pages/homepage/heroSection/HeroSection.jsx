import React from 'react'
import Slider from './Slider';
import parakramFont from '/parakram font.png'

const HeroSection = ({ setisLoaded }) => {
    return (
        <section id='hero-section' className={`relative w-full  overflow-x-hidden min-h-[400px] my-[60px] p-2`} style={{ height: `${window.innerHeight - 50}px` }} data-carousel="slide">

            <div className=' w-full h-full flex justify-center items-center'>
                <img src={parakramFont} alt="PARAKRAM" className=' w-fit h-fit mx-auto ' />
            </div>

        </section>
    )
}

export default HeroSection