import {
  CardBody,
  CardContainer,
  CardItem,
} from "../../components/ui/3d-card.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import SplitText from "../../components/reactBits/SplitText.jsx";
import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function Teampage() {

  const comingSoonRef = useRef(null);
  const circlesRef = useRef(null);
  const textRef = useRef(null);
  const formRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 12,
    minutes: 34,
    seconds: 56
  });

  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500",
    },
  ];
  const Leadershipdata = [
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
  ];

  const CoreTeam = [
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
  ];

  const Developers = [
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
  ];

  // Set to true to show Coming Soon page, false to show Sponsors
  const showComingSoon = true;

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
      {!showComingSoon && <div className="min-h-screen bg-black text-white">
        <div className="mb-36 h-5">{/* Spacer */}</div>

        {/* Leadership Section */}
        <div className="text-center">
          <SplitText
            text="LEADERSHIP"
            className="text-3xl sm:text-4xl lg:text-6xl font-semibold py-10 font-serif"
            delay={150}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
            loop={true}
          />
        </div>

        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
          {Leadershipdata.map((item, index) => (
            <CardContainer key={index} className="inter-var">
              <CardBody className=" relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-[#0000008b] border-white/[0.2]  w-full h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-3xl font-bold text-white"
                >
                  {item.name}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-white text-md max-w-sm mt-2"
                >
                  {item.Dept}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={item.image}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href="https://twitter.com/mannupaaji"
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal text-white"
                  >
                    Try now →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl  bg-white text-black  text-xs font-bold"
                  >
                    Sign up
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>

        <div className="mb-36 h-5">{/* Spacer */}</div>

        {/* Core Team Section */}
        <div className="text-center">
          <SplitText
            text="CORE TEAM"
            className="text-3xl sm:text-4xl lg:text-6xl font-semibold py-10"
            delay={150}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
            loop={true}
          />
        </div>

        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
          {CoreTeam.map((item, index) => (
            <CardContainer key={index} className="inter-var">
              <CardBody className=" relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-[#0000008b] border-white/[0.2]  w-full h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-3xl font-bold text-white"
                >
                  {item.name}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-white text-md max-w-sm mt-2"
                >
                  {item.Dept}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={item.image}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href="https://twitter.com/mannupaaji"
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal text-white"
                  >
                    Try now →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-white text-black  text-xs font-bold"
                  >
                    Sign up
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>

        <div className="mb-36 h-5">{/* Spacer */}</div>

        {/* Developers Section */}
        <div className="text-center">
          <SplitText
            text="DEVELOPERS"
            className="text-3xl sm:text-4xl lg:text-6xl font-semibold py-10"
            delay={150}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
            loop={true}
          />
        </div>

        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
          {Developers.map((item, index) => (
            <CardContainer key={index} className="inter-var">
              <CardBody className=" relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-full h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-3xl font-bold text-white"
                >
                  {item.name}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-white text-md max-w-sm mt-2"
                >
                  {item.Dept}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={item.image}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href="https://twitter.com/mannupaaji"
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal text-white"
                  >
                    Try now →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-white text-black  text-xs font-bold"
                  >
                    Sign up
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>

        <div className="mb-36 h-5">{/* Spacer */}</div>

      </div>}
      <Footer />
    </>
  );
}

export default Teampage;