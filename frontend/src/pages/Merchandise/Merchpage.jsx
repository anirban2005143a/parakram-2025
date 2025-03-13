import React from "react";
import CarouselTshirt from "../Merchandise/Merch.jsx";
import Navbar from "../../components/navbar/Navbar";
import FooterT from "../../components/Footer/Footer.jsx";
import BlurText from "../../components/reactBits/BlurText.jsx";
import { gsap } from 'gsap';
import { useRef, useEffect } from "react";
import Carouseljacket from "./MarchJacket.jsx";

const Merchpage = () => {
  const comingSoonRef = useRef(null);
  const circlesRef = useRef(null);
  const textRef = useRef(null);
  const formRef = useRef(null);
  

  const showComingSoon = false;

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
          }
      }, [showComingSoon]);
  
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
                    <div className="container mx-auto text-center">
                        <div ref={textRef} className="mb-12">
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                                <span className="typing-text">Coming Soon</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-indigo-100 max-w-2xl mx-auto">
                                <span className="typing-text">We're working on something amazing. Stay tuned for the Merchandise!</span>
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

      {!showComingSoon && (
        <> <div className="flex justify-center pt-[150px]">
        <BlurText
          text="Exclusive | Trendy | Premium | Limited"
          delay={180}
          animateBy="words"
          direction="top"
          className="lg:text-6xl p-4 text-center md:text-4xl text-2xl mb-8 text-white macondo-swash-caps-regular"
        />
      </div>
      <div className=" md:m-4 m-2">
        <CarouselTshirt />
      </div>
      <div className=" md:m-4 m-2">
        <Carouseljacket />
      </div>


      <div className="my-10 h-4 flex justify-center">
        <a 
        href="https://docs.google.com/forms/d/e/1FAIpQLSe5EZWUT3kiWPnPb770HxWbm7fKhqHcDXpPtoc1Dn8rF8Eo1g/viewform?usp=sharing"
        target="_blank">
          <button
            className="relative inline-block p-px font-semibold leading-6 text-white bg-neutral-900 shadow-2xl cursor-pointer rounded-2xl shadow-emerald-900 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-emerald-600"
            style={{ border: "2px solid white" }}
          >
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-600 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            <span className="relative  block px-6 py-3 rounded-2xl bg-neutral-950">
              <div className="relative  flex items-center space-x-3">
                <span className="transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300">
                  {" "}
                  Buy Merchandise
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7 h-7 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300"
                >
                  <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                </svg>
              </div>
            </span>
          </button>
        </a>
      </div>
      <div className="mt-20 h-5 "></div>
      <FooterT />
      </>
      )}
    </>
  );
};

export default Merchpage;
