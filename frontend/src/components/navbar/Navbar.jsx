
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import logoImg from '/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const logoImgRef = useRef(null);
    const toggleButtonRef = useRef(null);
    const leftBottomBorderRef = useRef(null);
    const rightBottomBorderRef = useRef(null);
    const leftTopBorderRef = useRef(null);
    const rightTopBorderRef = useRef(null);
    const logoBorderRef = useRef(null);

    // GSAP animation for mobile menu
    useEffect(() => {
        if (isMenuOpen) {
            // Slide in the menu from the right
            gsap.fromTo(
                menuRef.current,
                { x: '100%', opacity: 0 },
                { x: '0%', opacity: 1, duration: 0.5 }
            );
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

        // Animate the left 
        gsap.fromTo(
            [leftTopBorderRef.current, leftBottomBorderRef.current],
            { scaleX: 0 },
            { scaleX: 1, duration: 1, ease: 'power3.out', delay: 0.5 }
        );
        // Animate the right borders
        gsap.fromTo(
            [rightTopBorderRef.current, rightBottomBorderRef.current],
            { scaleX: 0 },
            { scaleX: 1, duration: 1, ease: 'power3.out', delay: 0.5 }
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
    }, []);

    return (
        <nav className="fixed w-full z-50 pt-2 backdrop-blur-sm">
            <div className="container mx-auto px-4 ">
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
                    <div className=" p-4 mx-4 relative">
                        <div
                            ref={logoBorderRef}
                            className="absolute inset-0 border-[1px]  border-white rounded-full transform "
                        />
                        <Link to='/'>
                            <img
                                ref={logoImgRef}
                                src={logoImg}
                                alt="Logo"
                                className="h-10 relative z-10"
                            />
                        </Link>
                    </div>

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
                    <div className="flex-shrink-0">
                        <img
                            src={logoImg}
                            alt="Logo"
                            className="h-10"
                        />
                    </div>

                    {/* Toggle Button */}
                    <button
                        ref={toggleButtonRef}
                        onClick={() => {
                            setIsMenuOpen(!isMenuOpen)
                        }}
                        className="text-white focus:outline-none"
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
                    className={`md:hidden fixed top-0 right-0 h-screen w-screen  bg-[#000000a4] backdrop-blur-sm shadow-lg transform transition-transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <div className="p-4 h-full">
                        <button
                            onClick={() => {
                                setIsMenuOpen(false)
                            }}
                            className="text-white focus:outline-none m-4"
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
                        <div className=' flex flex-col gap-10  pt-[50px] px-10 text-white'>
                            <Link to='/' className="block  py-2">Home</Link>
                            <Link to='/About' className="block  py-2">About</Link>
                            <Link to='/Events' className="block  py-2">Events</Link>
                            <Link to='/Contact' className="block  py-2">Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;