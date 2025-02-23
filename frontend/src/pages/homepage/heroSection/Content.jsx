import React, { useEffect, useRef } from 'react'
import SplitText from '../../../components/reactBits/SplitText';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const Content = () => {

    const paragraphRef = useRef(null)
    const buttonRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.fromTo(paragraphRef.current, {
                        x: -100,
                        opacity: 0
                    }, {
                        x: 0,
                        opacity: 1,
                        delay: 1,
                        duration: 1
                    });
                    // Stop observing after the animation starts
                    observer.unobserve(paragraphRef.current);


                    gsap.fromTo(buttonRef.current, {
                        y: 100,
                        opacity: 0
                    }, {
                        y: 0,
                        opacity: 1,
                        delay: 1.3,
                        duration: 1,
                    })
                    // Stop observing after the animation starts
                    observer.unobserve(buttonRef.current);
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the element is visible
        });

        if (paragraphRef.current) {
            observer.observe(paragraphRef.current);
        }
        if (buttonRef.current) {
            observer.observe(buttonRef.current);
        }

        // Cleanup observer on component unmount
        return () => {
            if (paragraphRef.current) {
                observer.unobserve(paragraphRef.current);
            }
            if (buttonRef.current) {
                observer.unobserve(buttonRef.current);
            }
        };
    }, [paragraphRef, buttonRef]);


    return (
        <div id='landing-page-content' className=' absolute w-full h-full left-0 md:translate-y-20 flex  md:justify-start md:items-start justify-center items-center z-20 overflow-hidden'>
            <div className=' md:p-4 p-2 md:text-start rounded-lg overflow-hidden md:w-7/12 sm:w-10/12 w-[97%] '>
                {/* <h1 className=' text-6xl font-bold text-white py-5'>Parakram</h1> */}
                <SplitText
                    text={`PARAKRAM '25`}
                    className="md:text-start  text-center "
                    delay={150}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    easing="easeOutCubic"
                    threshold={0.2}
                    rootMargin="-50px"
                // onLetterAnimationComplete={handleAnimationComplete}
                />
                <p ref={paragraphRef} className='great-vibes-regular text-gray-300 font-light text-xl pb-5'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus numquam libero Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus numquam libero
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus numquam libero Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus numquam libero
                </p>

                <div ref={buttonRef} className="flex items-center justify-start ">
                    <div className="relative group">
                        <a href='#events'>
                            <button
                                className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800   cursor-pointer rounded-xl   transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                            >
                                <span
                                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                ></span>

                                <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                                    <div className="relative z-10 flex items-center space-x-2">
                                        <span className="transition-all duration-500 group-hover:translate-x-1"
                                        >Events</span
                                        >
                                        <svg
                                            className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                                            data-slot="icon"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                clipRule="evenodd"
                                                d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                                                fillRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                </span>
                            </button>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Content