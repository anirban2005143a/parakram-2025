
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import logoImg from '/logo.svg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const logoImgRef = useRef(null);
    const logoImgMobileRef = useRef(null);
    const toggleButtonRef = useRef(null);
    const leftBottomBorderRef = useRef(null);
    const rightBottomBorderRef = useRef(null);
    const leftTopBorderRef = useRef(null);
    const rightTopBorderRef = useRef(null);
    const logoBorderRef = useRef(null);
    const logoBorderMobileRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);
    let lastScrollY = window.scrollY;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setIsVisible(false); // Hide on scroll down
            } else {
                setIsVisible(true); // Show on scroll up
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    // GSAP animation for mobile menu
    useEffect(() => {
        if (isMenuOpen) {
            // Slide in the menu from the right
            gsap.fromTo(
                menuRef.current,
                { x: '100%', opacity: 0 },
                { x: '0%', opacity: 1, duration: 0.5 }
            );

            gsap.fromTo(document.querySelectorAll('.nav-menu-mobile'), {
                x: 100,
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.2,
                delay: 0.2,

            })
        } else {
            // Slide out the menu to the right
            gsap.to(menuRef.current, {
                x: '100%',
                opacity: 0,
                duration: 0.5,
            });
        }
    }, [isMenuOpen]);

    // GSAP animations for logo and borders
    useEffect(() => {
        // Animate the logo and its circular border
        gsap.fromTo(
            logoBorderRef.current,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.5 }
        );
        gsap.fromTo(
            logoBorderMobileRef.current,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.5 }
        );

        // Animate the left 
        gsap.fromTo(
            [leftTopBorderRef.current, leftBottomBorderRef.current],
            { scaleX: 0 },
            { scaleX: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
        );
        // Animate the right borders
        gsap.fromTo(
            [rightTopBorderRef.current, rightBottomBorderRef.current],
            { scaleX: 0 },
            { scaleX: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
        );

        // Animate the menu items
        const navMenu = document.querySelectorAll('.nav-menu');
        gsap.fromTo(
            navMenu,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, delay: 0.1 }
        );

        // Animate the logo image
        gsap.fromTo(
            logoImgRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 }
        );
        gsap.fromTo(
            logoImgMobileRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 }
        );
    }, []);

    return (
        <motion.nav
            className="fixed w-full  z-50 py-2"
            initial={{ y: 0 }}
            animate={{ y: isVisible ? 0 : '-100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
            <div className="container mx-auto px-4 max-w-5xl">
                {/* Desktop Navbar */}
                <div className="hidden md:flex  justify-center items-center relative">
                    {/* Left Menu with Upper and Lower Borders */}
                    <div className="flex w-1/2 justify-between gap-5 relative px-4">
                        <div
                            ref={leftTopBorderRef}
                            className="absolute top-[-15px] left-0 w-full h-0.5 bg-white transform origin-right scale-x-0 "
                        />
                        <Link to='/events' className="text-white block hover:underline hover:underline-offset-4 hover:text-gray-300 nav-menu">Events</Link>
                        <Link to='/Accomodation' className="text-white block hover:underline hover:underline-offset-4 hover:text-gray-300 nav-menu">Accomodation</Link>
                        <Link to='/team' className="text-white block hover:underline hover:underline-offset-4 hover:text-gray-300 nav-menu">Team</Link>
                        <div
                            ref={leftBottomBorderRef}
                            className="absolute bottom-[-15px] left-0 w-full h-0.5  bg-white transform origin-right scale-x-0"
                        />
                    </div>

                    {/* Centered Logo with Circular Border */}
                    <Link to='/'>
                        <div className="h-20 w-20  p-2 mx-4 relative flex items-center justify-center">
                            <div
                                ref={logoBorderRef}
                                className="absolute inset-0 border-[1px] w-full h-full bg-white border-white rounded-full transform "
                            />
                            <img
                                ref={logoImgMobileRef}
                                src={logoImg}
                                alt="Logo"
                                className="w-full h-full relative   "
                            />
                        </div>
                    </Link>

                    {/* Right Menu with Upper and Lower Borders */}
                    <div className="flex w-1/2 justify-between gap-5 relative px-4">
                        <div
                            ref={rightTopBorderRef}
                            className="absolute top-[-15px] left-0 w-full h-0.5 bg-white transform origin-left scale-x-0"
                        />
                        <Link to='/Merchandise' className="text-white hover:underline hover:underline-offset-4 hover:text-gray-300 nav-menu">Merchandise</Link>
                        <Link to='/Sponsors' className="text-white hover:underline hover:underline-offset-4 hover:text-gray-300 nav-menu">Sponsors</Link>
                        <Link to='/About' className="text-white hover:underline hover:underline-offset-4 hover:text-gray-300 nav-menu">About</Link>
                        <div
                            ref={rightBottomBorderRef}
                            className="absolute bottom-[-15px] left-0 w-full h-0.5 bg-white transform origin-left scale-x-0"
                        />
                    </div>
                </div>

                {/* Mobile Navbar */}
                <div className="md:hidden flex justify-between items-center py-4">
                    {/* Logo on the left */}
                    <Link to='/'>
                        <div className="h-15 w-15  p-1.5 mx-2 relative flex items-center justify-center">
                            <div
                                ref={logoBorderMobileRef}
                                className="absolute inset-0 border-[1px] w-full h-full bg-white border-white rounded-full transform "
                            />
                            <img
                                ref={logoImgRef}
                                src={logoImg}
                                alt="Logo"
                                className="w-full h-full relative   "
                            />
                        </div>
                    </Link>
                    {/* Toggle Button */}
                    <button
                        ref={toggleButtonRef}
                        onClick={() => {
                            // console.log(menuRef.current)
                            setIsMenuOpen(!isMenuOpen)
                        }}
                        className="text-white cursor-pointer focus:outline-none"
                    >
                        <svg
                            className="w-10 h-10"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    ref={menuRef}
                    className={`${isMenuOpen ? "" : "hidden "} md:hidden fixed top-0 right-0 h-screen w-screen  bg-[#00000084] backdrop-blur-sm shadow-lg `}
                >
                    <div className="px-10 pt-[50px] h-full">
                        <button
                            onClick={() => {
                                setIsMenuOpen(false)
                            }}
                            className="text-white cursor-pointer focus:outline-none"
                        >
                            <svg
                                className="w-10 h-10"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <div className=' flex flex-col items-start gap-10  pt-[20px] text-white'>
                            <Link to='/events' className="text-white hover:underline hover:underline-offset-4  nav-menu-mobile">Events</Link>
                            <Link to='/Accomodation' className="text-white hover:underline hover:underline-offset-4  nav-menu-mobile">Accomodation</Link>
                            <Link to='/team' className="text-white hover:underline hover:underline-offset-4  nav-menu-mobile">Team</Link>
                            <Link to='/Merchandise' className="text-white hover:underline hover:underline-offset-4  nav-menu-mobile">Merchandise</Link>
                            <Link to='/Sponsors' className="text-white hover:underline hover:underline-offset-4  nav-menu-mobile">Sponsors</Link>
                            <Link to='/About' className="text-white hover:underline hover:underline-offset-4  nav-menu-mobile">About</Link>
                        </div>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;