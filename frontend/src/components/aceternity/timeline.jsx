
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import BlurText from "../reactBits/BlurText";
import SplitText from "../reactBits/SplitText";
import gsap from "gsap";

export const Timeline = ({
  data
}) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);
  const paragraphRef = useRef(null)

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  useEffect(() => {
    gsap.fromTo(paragraphRef.current, {
      x: -100,
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
      duration: 2,
      delay: 1,
      ease: "power3.out"
    })
  }, [paragraphRef.current])


  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    (<div
      className="w-full font-sans md:px-10"
      ref={containerRef}>
      <div className="max-w-7xl mx-auto pt-20 md:pb-0 pb-20  px-4 md:px-8 lg:px-10">
        {/* <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Where Legends Rise – Join the Thrill of Sports Fest 2025!
        </h2> */}
        <SplitText
          text="Where Legends Rise – Join the Thrill of PARAKRAM '25!"
          className="text-sm font-semibold text-center "
          delay={20}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          easing="easeOutCubic"
          threshold={0.2}
          fontStyle=' nosifer-regular '
          fontSize=' text-3xl '
          SmFontSize=' sm:text-4xl '
          rootMargin="-50px"
        />
        <p
          ref={paragraphRef}
          className="text-neutral-700  dark:text-neutral-300 text-sm italic font-light md:text-base  my-10">
          Get ready to witness the ultimate showdown of skill, passion, and teamwork at [Your College Name] Sports Fest 2025! 🏅 From adrenaline-pumping races to intense team battles, this fest brings together athletes from all disciplines to compete, celebrate, and create unforgettable memories. Whether you're a fierce competitor or an enthusiastic supporter, join us in the spirit of sportsmanship and unity. Let the games begin! 🎉🔥
        </p>
      </div>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20 md:-translate-y-10">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            <div
              className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div
                className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div
                  className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3
                className="hidden md:block h-[70px] text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3
                className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
              <div class="flex items-center justify-start my-5">
                <div class="relative group">
                  <button
                    class="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                  >
                    <span
                      class="absolute inset-0 rounded-lg bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    ></span>

                    <span class="relative z-10 block px-6 py-3 rounded-lg bg-slate-800">
                      <div class="relative z-10 flex items-center space-x-2">
                        <span class="transition-all duration-500 group-hover:translate-x-1"
                        >Schedule</span
                        >
                        <svg
                          class="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                          data-slot="icon"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            clip-rule="evenodd"
                            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full" />
        </div>
      </div>
    </div>)
  );
};
