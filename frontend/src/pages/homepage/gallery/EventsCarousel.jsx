import React, { useEffect, useRef } from 'react';
import GalleryHeading from './GalleryHeading';
import CircularGallery from '../../../components/reactBits/circularGallery'
import { PinContainer } from '../../../components/aceternity/3dpin';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger)

const EventsCarousel = () => {

    const circularGelleryRef = useRef(null)

    useEffect(() => {
        circularGelleryRef.current && gsap.fromTo(circularGelleryRef.current, {
            y: 200,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 2,
            delay: 0.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: circularGelleryRef.current,
                scroller: document.body,
                start: "top 80%",
                end: "top 40%",
                scrub: 2,
            }
        })
    }, [circularGelleryRef])


    return (
        <section id='events' className=' pt-[200px] pb-20'>
            <GalleryHeading />
            <div ref={circularGelleryRef} className=' h-[500px] relative overflow-visible ' >
                <CircularGallery bend={4} textColor="#ffffff" borderRadius={0.05} />
            </div>
            <div className="flex items-center justify-center my-10">
                <div className="relative group">
                    <Link to="/events">
                        <button
                            className="relative inline-block p-px font-semibold leading-6 text-white bg-neutral-900 shadow-2xl cursor-pointer rounded-2xl shadow-emerald-900 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-emerald-600"
                        >
                            <span
                                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-600 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                            ></span>
                            <span className="relative z-10 block px-6 py-3 rounded-2xl bg-neutral-950">
                                <div className="relative z-10 flex items-center space-x-3">
                                    <span
                                        className="transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300"
                                    > Explore Events</span >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-7 h-7 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300"
                                    >
                                        <path
                                            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                        ></path>
                                    </svg>
                                </div>
                            </span>
                        </button>
                    </Link>
                </div>
            </div>

        </section>
    );
};

export default EventsCarousel;