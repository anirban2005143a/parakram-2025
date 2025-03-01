import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import tata from "/logos/tata.png";
import cairn from "/logos/cairn.png";
import SBI from "/logos/SBI.jpg";
import vodafone from "/logos/vodafone.png";
import dominos from "/logos/dominos.png";
import lensfit from "/logos/lensfit.png";
import pepsi from "/logos/pepsi.png";
import Indian_oil from "/logos/Indian_oil.png";
import pantaloons from "/logos/pantaloons.png";
import ntpc from "/logos/ntpc.png";
import Reliance from "/logos/Reliance.png";
import ojas from "/logos/ojas.png";
import gail from "/logos/gail.png";
import american_swan from "/logos/american_swan.png";
import volvo from "/logos/volvo.jpg";
import shell from "/logos/shell.png";
import canara_bank from "/logos/canara_bank.png";
import Navbar from '../../components/navbar/Navbar';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Sponsors = () => {
    const galleryRef = useRef(null);
    const comingSoonRef = useRef(null);
    const textRef = useRef(null);
    const circlesRef = useRef(null);
    const formRef = useRef(null);

    // Set to true to show Coming Soon page, false to show Sponsors
    const showComingSoon = true;

    useEffect(() => {
        if (showComingSoon && comingSoonRef.current) {
            // Animate the main title
            gsap.from(textRef.current, {
                y: 100,
                opacity: 0,
                duration: 1.5,
                ease: "elastic.out(1, 0.5)"
            });

            // Animate the decorative circles
            const circles = circlesRef.current.querySelectorAll('.circle');
            gsap.from(circles, {
                scale: 0,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "back.out(1.7)",
                delay: 0.5
            });

            // Animate the countdown
            // gsap.from(countdownRef.current.querySelectorAll('.countdown-item'), {
            //     y: 50,
            //     opacity: 0,
            //     duration: 0.8,
            //     stagger: 0.15,
            //     ease: "power3.out",
            //     delay: 1
            // });

            // Animate the form
            gsap.from(formRef.current, {
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
                delay: 1.5
            });

            // Text typing animation
            const textElements = textRef.current.querySelectorAll('.typing-text');
            textElements.forEach((el, index) => {
                const originalText = el.textContent;
                el.textContent = '';

                gsap.to(el, {
                    duration: 2,
                    text: originalText,
                    delay: 0.5 + (index * 0.5),
                    ease: "none"
                });
            });

            // Floating animation for circles
            circles.forEach((circle, index) => {
                gsap.to(circle, {
                    y: `${Math.sin(index) * 20}px`,
                    x: `${Math.cos(index) * 20}px`,
                    duration: 3 + index,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });
            });
        } else if (!showComingSoon && galleryRef.current) {
            const galleryItems = galleryRef.current.querySelectorAll('.gallery-item');

            gsap.from(galleryItems, {
                opacity: 0,
                y: 50,
                stagger: 0.2,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: galleryRef.current,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                },
            });
        }
    }, [showComingSoon]);

    // Countdown timer logic
    const [timeLeft, setTimeLeft] = useState({
        days: 30,
        hours: 12,
        minutes: 34,
        seconds: 56
    });

    useEffect(() => {
        if (!showComingSoon) return;

        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                } else if (prev.days > 0) {
                    return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
                }
                return prev;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [showComingSoon]);

    //     e.preventDefault();
    //     if (email) {
    //         // Here you would typically send the email to your backend
    //         console.log("Email submitted:", email);
    //         setIsSubmitted(true);

    //         // Animation for successful submission
    //         gsap.to(formRef.current.querySelector('.form-success'), {
    //             opacity: 1,
    //             y: 0,
    //             duration: 0.5,
    //             ease: "power2.out"
    //         });
    //     }
    // };

    const images = [
        tata, cairn, SBI, vodafone, dominos, lensfit, pepsi, Indian_oil, pantaloons, ntpc, Reliance, ojas, gail, american_swan, volvo, shell, canara_bank
    ];

    return (
        <>
            <Navbar />

            {/* Coming Soon Page */}
            {showComingSoon && (
                <section
                    ref={comingSoonRef}
                    className="min-h-screen bg-gradient-to-br from-[#272e374d] to-[#00000079] flex flex-col items-center justify-center px-4 overflow-hidden relative"
                >
                    {/* Decorative circles */}
                    <div ref={circlesRef} className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="circle absolute top-[10%] left-[15%] w-32 h-32 rounded-full bg-pink-500 opacity-20"></div>
                        <div className="circle absolute top-[40%] left-[80%] w-48 h-48 rounded-full bg-indigo-500 opacity-20"></div>
                        <div className="circle absolute top-[70%] left-[25%] w-40 h-40 rounded-full bg-purple-500 opacity-20"></div>
                        <div className="circle absolute top-[20%] left-[60%] w-24 h-24 rounded-full bg-blue-500 opacity-20"></div>
                        <div className="circle absolute top-[85%] left-[75%] w-36 h-36 rounded-full bg-indigo-300 opacity-20"></div>
                    </div>

                    {/* Main content */}
                    <div className="container mx-auto z-10 text-center">
                        <div ref={textRef} className="mb-12">
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                                <span className="typing-text">Coming Soon</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-indigo-100 max-w-2xl mx-auto">
                                <span className="typing-text">We're working on something amazing. Stay tuned for the Sponsors!</span>
                            </p>
                        </div>


                    </div>

                    {/* Bottom wave */}
                    <div className="absolute bottom-0 left-0 w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
                            <path fill="rgba(255,255,255,0.1)" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                        </svg>
                    </div>
                </section>
            )}

            {/* I have kept this hidden for now */}
            {!showComingSoon && (
                <section id='sponsors' ref={galleryRef} className="container mx-auto px-4 pt-[100px] py-12">
                    <h2 className="text-3xl font-bold text-center mb-8">Our Sponsors</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {images.map((image, index) => (
                            <div key={index} className="gallery-item flex justify-center items-center p-4 bg-[#ffffff] backdrop-blur-xs rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <img src={image || "/placeholder.svg"} alt={`Sponsor ${index + 1}`} className="w-full h-auto max-h-24 object-contain" />
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </>
    );
};

export default Sponsors;
