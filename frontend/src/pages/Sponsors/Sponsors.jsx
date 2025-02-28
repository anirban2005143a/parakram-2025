import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Sponsors = () => {
    const galleryRef = useRef(null);

    useEffect(() => {
        const galleryItems = galleryRef.current.querySelectorAll('.gallery-item');

        gsap.from(galleryItems, {
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: galleryRef.current,
                start: 'top 80%', // Animation starts when the top of the gallery is 80% in view
                end: 'bottom 20%', // Animation ends when the bottom of the gallery is 20% in view
                toggleActions: 'play none none reverse', // Play animation on enter, reverse on leave
            },
        });
    }, []);

    const images = [
        tata, cairn, SBI, vodafone, dominos, lensfit, pepsi, Indian_oil, pantaloons, ntpc, Reliance, ojas, gail, american_swan, volvo, shell, canara_bank
    ];

    return (
        <>
            <Navbar/>
            <section id='sponsors' ref={galleryRef} className="container mx-auto px-4 pt-[100px] py-12">
                <h2 className="text-3xl font-bold text-center mb-8">Our Sponsors</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {images.map((image, index) => (
                        <div key={index} className="gallery-item flex justify-center items-center p-4 bg-[#ffffff] backdrop-blur-xs rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <img src={image} alt={`Sponsor ${index + 1}`} className="w-full h-auto max-h-24 object-contain" />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Sponsors;