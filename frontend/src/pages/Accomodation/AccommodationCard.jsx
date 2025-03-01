import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AccommodationCard = ({
  title,
  description,
  price,
  features,
  buttonText = "Choose Plan",
  discount,
}) => {
  // Refs for GSAP animations
  const cardRef = useRef(null);
  const titleRef = useRef(null);
  const priceRef = useRef(null);
  const featuresRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    if (card) {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(titleRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.3,
        // ease: "power3.out",
      });

      gsap.from(priceRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "elastic.out(1, 0.5)",
      });

      gsap.from(featuresRef.current.children, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.2,
        delay: 0.7,
        // ease: "power3.out",
      });

      gsap.from(buttonRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 1,
        // ease: "power3.out",
      });

      // Hover Effect
      gsap.set(card, { scale: 1 });

      card.addEventListener("mouseenter", () => {
        gsap.to(card, { scale: 1.02, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)", duration: 0.1 });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, { scale: 1.02, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)", duration: 0.3 });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, { scale: 1, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", duration: 0.3 });
      });
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className="max-w-sm w-full h-[750px] bg-[#0000004f] backdrop-blur-xl rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl border border-neutral-700 z-40"
    >
      <div className=" pb-[100px] ">
        <div className="p-6 ">
          <h2 ref={titleRef} className="text-2xl font-bold text-white">
            {title}
          </h2>
          <p className="text-sm text-white/80 mt-2">{description}</p>
        </div>

        <div className="p-6">
          <div ref={priceRef} className="flex items-end">
            <span className="text-4xl font-bold  text-white">
              {price}
            </span>
            
          </div>
          {discount && (
            <p className="text-sm text-gray-300 mt-2">
              {discount}
            </p>
          )}
        </div>

        <div className="p-6 border-t  border-neutral-700">
          <ul ref={featuresRef} className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-white mr-2"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span className="text-gray-300">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="p-6 absolute bottom-2 w-full h-[75px] border-t border-gray-200">
        <button
          ref={buttonRef}
          className="w-full py-1 bg-white text-black cursor-pointer rounded-lg font-semibold hover:bg-gray-600 hover:text-white transition-colors"
          >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default AccommodationCard;
