import React, { useState, useEffect } from 'react';

import footballImg from '/sports/football1.jpg'
import cricketImg from '/sports/cricket1.jpg'
import squashImg from '/sports/squash2.jpg'
import powerliftingImg from '/sports/powerliftting1.jpg'
import chessImg from '/sports/chess1.jpg'
import tableTenisImg from '/sports/tableTenis1.jpg'
import badmintonImg from '/sports/badminton1.jpg'
import athleticsImg from '/sports/athletics1.jpg'
import kabaddiImg from '/sports/kabaddi1.jpg'
import basketBallImg from '/sports/basketBall1.jpg'
import volleyBallImg from '/sports/volleyBall1.jpg'
import hockeyImg from '/sports/hockey1.jpg'
import tenisImg from '/sports/tenis1.jpg'
import Content from './Content';


const AutoSlidingCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { image: footballImg, title: "football-img" },
        { image: cricketImg, title: "cricket-img" },
        { image: squashImg, title: "squash-img" },
        { image: powerliftingImg, title: "power-lifting-img" },
        { image: chessImg, title: "chess-img" },
        { image: tableTenisImg, title: "table-tanis-img" },
        { image: badmintonImg, title: "badminton-img" },
        { image: athleticsImg, title: "athletics-img" },
        { image: kabaddiImg, title: "kabaddi-img" },
        { image: basketBallImg, title: "basketBall-img" },
        { image: volleyBallImg, title: "volleyBall-img" },
        { image: hockeyImg, title: "hockey-img" },
        { image: tenisImg, title: "tenis-img" },
    ];

    // Function to go to the next slide
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    // Function to go to a specific slide
    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    // Automatically transition to the next slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, [currentSlide]);

    return (
        <>
            <section id='herosection' className=' w-screen relative lg:p-8 md:p-4 p-2 overflow-hidden rounded-lg my-10'>

                <div className="relative overflow-hidden rounded-lg" style={{ height: `${window.innerHeight - 80}px` }} >
                    {/* content  */}
                    <Content />

                    {/* Slides */}
                    <div
                        className="flex h-full transition-transform duration-500 ease-in-out  "
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {slides.map((slide, index) => (
                            <div key={index} className="w-full flex-shrink-0 relative  overflow-hidden">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="w-full h-full object-center object-cover  overflow-hidden"
                                />
                                <div className="overlayer pointer-events-none absolute w-full h-full top-0 left-0 bg-[#000000b4]"></div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 cursor-pointer rounded-full ${currentSlide === index ? 'bg-white' : 'bg-gray-500'}`}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AutoSlidingCarousel