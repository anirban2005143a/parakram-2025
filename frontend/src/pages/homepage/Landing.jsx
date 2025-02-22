import React from 'react'
import bg1 from "../../assets/bg1.webp"
import bg2 from "../../assets/bg2.jpg"
import bg3 from "../../assets/bg3.jpg"
import SplitText from '../../components/reactBits/SplitText';

const LandingPage = () => {
    return (
        // <div id='landing-page-carousel' className=' h-screen  overflow-x-hidden items-center '>
        <div id="default-carousel" className="relative h-screen w-full overflow-x-hidden md:p-6 p-4" data-carousel="slide">
            {/* slider  */}
            <div className="relative h-full overflow-hidden">

                {/* content  */}
                <div className=' absolute w-full h-full left-0 flex  justify-center items-center z-20 '>
                    <div className=' md:p-4 p-2 text-center bg-[#0000005a] backdrop-blur-sm rounded-xl overflow-hidden md:w-7/12 sm:w-10/12 w-[97%] '>
                        {/* <h1 className=' text-6xl font-bold text-white py-5'>Parakram</h1> */}
                        <SplitText
                            text="Parakram"
                            className="text-center sm:text-6xl text-5xl font-semibold  md:font-bold text-white"
                            delay={150}
                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                            easing="easeOutCubic"
                            threshold={0.2}
                            rootMargin="-50px"
                            // onLetterAnimationComplete={handleAnimationComplete}
                        />
                        <p className=' text-gray-300 font-light text-xl pb-5'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus numquam libero Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus numquam libero
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus numquam libero Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus numquam libero
                        </p>
                    </div>
                </div>
                <div className=' relative z-10 h-full'>
                    <div className="hidden duration-700 ease-in-out h-full " data-carousel-item>
                        <div className="absolute block w-full h-full bg-cover bg-no-repeat -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  overflow-hidden rounded-lg bg-[#00000061] bg-blend-darken bg-center" style={{ backgroundImage: `url(${bg1})` }} />
                    </div>
                    <div className="hidden duration-700 ease-in-out h-full" data-carousel-item>
                        <div className="absolute block w-full h-full bg-cover bg-no-repeat -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  overflow-hidden rounded-lg bg-[#00000061] bg-blend-darken bg-center" style={{ backgroundImage: `url(${bg2})` }} />
                    </div>
                    <div className="hidden duration-700 ease-in-out h-full" data-carousel-item>
                        <div className="absolute block w-full h-full bg-cover bg-no-repeat -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  overflow-hidden rounded-lg bg-[#00000061] bg-blend-darken bg-center" style={{ backgroundImage: `url(${bg3})` }} />
                    </div>
                    <div className="hidden duration-700 ease-in-out h-full" data-carousel-item>
                        <div className="absolute block w-full h-full bg-cover bg-no-repeat -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  overflow-hidden rounded-lg bg-[#00000061] bg-blend-darken bg-center" style={{ backgroundImage: `url(${bg1})` }} />
                    </div>
                    <div className="hidden duration-700 ease-in-out h-full" data-carousel-item>
                        <div className="absolute block w-full h-full bg-cover bg-no-repeat -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  overflow-hidden rounded-lg bg-[#00000061] bg-blend-darken bg-center" style={{ backgroundImage: `url(${bg2})` }} />
                    </div>
                </div>
            </div>
            {/* bottom button  */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-10 left-1/2 space-x-3 rtl:space-x-reverse">
                <button type="button" className="w-3 h-3 hover:bg-white cursor-pointer rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-3 h-3 hover:bg-white cursor-pointer rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-3 h-3 hover:bg-white cursor-pointer rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                <button type="button" className="w-3 h-3 hover:bg-white cursor-pointer rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                <button type="button" className="w-3 h-3 hover:bg-white cursor-pointer rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
            </div>

        </div>

        // </div>
    )
}

export default LandingPage