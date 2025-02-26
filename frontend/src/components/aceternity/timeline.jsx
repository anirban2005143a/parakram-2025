
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import BlurText from "../reactBits/BlurText";
import SplitText from "../reactBits/SplitText";
import gsap from "gsap";

import footballImg from '/sports/football1.jpg'
import footbal2Img from '/sports/football2.jpg'
import cricket1Img from '/sports/cricket1.jpg'
import cricket2Img from '/sports/cricket2.jpg'
import squash1Img from '/sports/squash1.jpg'
import squash2Img from '/sports/squash2.jpg'

export const EventTimeline = () => {

  const data = [
    {
      title: "DAY 1",
      content: (
        <div>
          <div className=" flex md:flex-row flex-col ">
            {/* <div className="content shadow-none  ">
              <h3 className=" font-extrabold md:text-xl text-lg  text-white">Event Name</h3>
              <p className=" font-light text-gray-100">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ab recusandae, officiis ratione aliquam molestiae minus perspiciatis fugiat blanditiis culpa reiciendis dolorem dolorum, exercitationem accusamus ducimus in tempore ut commodi.</p>
            </div> */}
            <img
              src={footballImg}
              alt="startup template"
              width={500}
              height={500}
              className=" object-center rounded-lg object-cover h-40 md:h-54 lg:h-70 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />

          </div>
        </div>
      ),
    },
    {
      title: "DAY 2",
      content: (
        <div>
          {/* <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p> */}
          <div className="grid grid-cols-1 gap-4">
            <img
              src={cricket1Img}
              alt="startup template"
              width={500}
              height={500}
              className="object-center rounded-lg object-cover h-40 md:h-54 lg:h-70  w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "DAY 3",
      content: (
        <div>
          {/* <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p> */}
          <div className="grid grid-cols-1 gap-4">
            <img
              src={squash1Img}
              alt="startup template"
              width={500}
              height={500}
              className="object-center rounded-lg object-cover h-40 md:h-54 lg:h-70 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },

  ];

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
    (<section id='Events' className=" ">
      <div className="w-full">
        <div
          className="w-full font-sans pt-[100px] md:px-10  "
          ref={containerRef}>

          <div ref={ref} className="relative max-w-7xl mx-auto pb-20 md:-translate-y-10 bg-gradient-to-b from-[#6161615b] to-[#00000093] backdrop-blur-xl rounded-xl">
            {data.map((item, index) => (
              <div key={index} className="flex justify-start pt-9 md:gap-10">
                <div
                  className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                  <div
                    className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                    <div
                      className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                  </div>
                  <h3
                    className="hidden md:block font-extrabold h-[70px] text-xl md:pl-20 md:text-5xl  text-neutral-50 dark:text-neutral-50">
                    {item.title}
                  </h3>
                </div>

                <div className="relative pl-20 pr-4 md:pl-4 w-full">
                  <h3
                    className="md:hidden block font-extrabold text-2xl mb-4 text-left  text-neutral-500 dark:text-neutral-500">
                    {item.title}
                  </h3>
                  {item.content}{" "}

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
        </div>
      </div>
    </section >)
  );
};
