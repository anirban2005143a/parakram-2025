import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AccommodationCard from "./AccommodationCard";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Accompage = () => {
  const features = [
    "Access to All Features",
    "20% discount on backorders",
    "Domain name Appraisal",
    "10 Social Profiles",
  ];

  const data = [
    {
      title: "For those who want to stay in the IIT-ISM campus A",
      price: "Rs. 1949/-",
    },
    {
      title: "For those who want to stay in the IIT-ISM campus B",
      price: "Rs. 1549/-",
    },
    {
      title: "For those who want to stay in the IIT-ISM campus C",
      price: "Rs. 1149/-",
    },
    {
      title: "For those who want to stay in the IIT-ISM campus D",
      price: "Rs. 1299/-",
    },
    {
      title: "For those who want to stay in the IIT-ISM campus E",
      price: "Rs. 899/-",
    },
    {
      title: "For those who want to stay in the IIT-ISM campus F",
      price: "Rs. 399/-",
    },
  ];

  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-wrap gap-4 sm:gap-8 md:gap-15 justify-center p-4"
    >
      {data.map((item, index) => (
        <div
          key={index}
          ref={(el) => (cardRefs.current[index] = el)}
          className="accommodation-card"
        >
          <AccommodationCard
            title={item.title}
            description="Comfortable and affordable stay within the IIT-ISM campus."
            price={item.price}
            features={features}
            discount="No hidden fees"
            buttonText="Book Now"
          />
        </div>
      ))}
    </div>
  );
};

export default Accompage;
