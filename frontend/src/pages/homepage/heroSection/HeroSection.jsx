import React from 'react'
import Slider from './slider';

const HeroSection = () => {
    return (
        // <div id='landing-page-carousel' className=' h-screen  overflow-x-hidden items-center '>
        <section id="heroSection" className={`relative w-full overflow-x-hidden translate-y-[60px] min-h-[400px] p-2`} style={{ height: `${window.innerHeight - 50}px` }} data-carousel="slide">

            {/* slider  */}
            <Slider/>
            {/* bottom button  */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-10 left-1/2 space-x-3 rtl:space-x-reverse">
                <button type="button" className="w-3 h-3 hover:bg-white cursor-pointer rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-3 h-3 hover:bg-white cursor-pointer rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-3 h-3 hover:bg-white cursor-pointer rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                <button type="button" className="w-3 h-3 hover:bg-white cursor-pointer rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                <button type="button" className="w-3 h-3 hover:bg-white cursor-pointer rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
            </div>

        </section>

        // </div>
    )
}

export default HeroSection