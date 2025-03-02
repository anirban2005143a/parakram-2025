import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import parakramFont from '/logo_para.svg';
import { useNavigate } from 'react-router-dom';

const HeroSection = ({ setisLoaded }) => {
  const heroRef = useRef(null);
  const imgRef = useRef(null);
  const imgCaptionRef = useRef(null);
  const timerRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date('2025-03-21T00:00:00');

  const navigate = useNavigate()

  // Floating animation for the logo
  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      {
        y: -5,
      },
      {
        y: 5,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      },
    );
  }, []);

  // Timer animation and countdown logic
  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      {
        scale: 3,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: 'elastic.out(1,0.8)',
      },
    );

    gsap.from(timerRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: 'power3.out',
    });

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0 0 25px rgba(255,255,255,0.5)',
      transition: {
        duration: 0.3,
        yoyo: Number.POSITIVE_INFINITY,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section
      id="hero-section"
      ref={heroRef}
      className={`relative w-full overflow-hidden min-h-[400px] my-[60px] p-2`}
      style={{ height: `${window.innerHeight - 50}px` }}
      data-carousel="slide"
    >
      <div className="relative group flex justify-center items-center w-full h-full overflow-hidden">
        {/* PNG Image with Infinite Glow */}
        <div className="md:w-7/12 w-11/12 h-auto">
          <img
            ref={imgRef}
            src={parakramFont}
            alt="Glowing Image"
            className="relative  w-full object-center object-cover"
          />

          {/* Sparkling Particles */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute sm:w-2 sm:h-2 w-1 h-1 bg-yellow-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, Math.random() * 100 - 50, 0],
                opacity: [0, 1, 0],
                scale: [0, 4, 0],
              }}
              transition={{
                duration: Math.random() * 4 + 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
                ease: 'easeInOut',
              }}
            />
          ))}

          {/* Countdown Timer */}
          <div ref={timerRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8 px-4 ">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds },
            ].map((item, index) => (
              <div
                key={item.label}
                className="relative group bg-[#00000044] bg-opacity-30 backdrop-blur-sm rounded-lg p-4 text-center border border-orange-200 border-opacity-20"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-sm text-gray-300 uppercase tracking-wider">{item.label}</div>
                {/* Animated corner borders */}
                
                <div className="absolute inset-0">
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-yellow-200 border-opacity-50 rounded-tl" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-yellow-200 border-opacity-50 rounded-tr" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-yellow-200 border-opacity-50 rounded-bl" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-yellow-200 border-opacity-50 rounded-br" />
                </div>
              </div>
            ))}
          </div>

          {/* Registration Button */}
          <div className="mt-12 text-center">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => navigate('/events')}
              className="relative inline-flex items-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-400 to-slate-700 rounded-full overflow-hidden group"
            >
              <span className="relative ">Registration is Live!</span>
              {/* Animated background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'easeInOut',
                }}
              />
              {/* Sparkle effects */}
              <div className="absolute inset-0">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.5,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </div>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
