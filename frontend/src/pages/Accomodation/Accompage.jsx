import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AccommodationCard from "./AccommodationCard";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Accompage = () => {
  

  const data = [
    {
      title: "Option-A",
      price: "Rs. 2250/-",
      features : [
        "Participation fees",
        "Three meals per day for three days (Breakfast, Lunch and Dinner)",
        "Accommodation inside campus (For 3 days)",
        "Transportation to and fro the Railway station to IIT (ISM) Campus",
        "An attractive welcome kit for each participant",
        "Pro Nights (EDM night, Band night etc)",
        "Refreshments in between the matches",
        "Merchandise (Jacket)",
      ],
    },
    {
      title: "Option-B",
      price: "Rs. 1850/-",
      features : [
        "Participation fees",
        "Three meals per day for three days (Breakfast, Lunch and Dinner)",
        "Accommodation inside campus (For 3 days)",
        "Transportation to and fro the Railway station to IIT (ISM) Campus",
        "An attractive welcome kit for each participant",
        "Pro Nights (EDM night, Band night etc)",
        "Refreshments in between the matches",
        "Merchandise (T-shirt)",
      ],
    },
    {
      title: "Option-C",
      price: "Rs. 1450/-",
      features : [
        "Participation fees",
        "Three meals per day for three days (Breakfast, Lunch and Dinner)",
        "Accommodation inside campus (For 3 days)",
        "Transportation to and fro the Railway station to IIT (ISM) Campus",
        "An attractive welcome kit for each participant",
        "Pro Nights (EDM night, Band night etc)",
        "Refreshments in between the matches",
      ],
    },
    {
      title: "Option-D",
      price: "Rs. 1600/-",
      features : [
        "Participation fees",
        "An attractive welcome kit for each participant",
        "Pro Nights (EDM night, Band night etc)",
        "Refreshments in between the matches",
        "Merchandise (Jacket)",
      ],
    },
    {
      title: "Option-E",
      price: "Rs. 1200/-",
      features : [
        "Participation fees",
        "An attractive welcome kit for each participant",
        "Pro Nights (EDM night, Band night etc)",
        "Refreshments in between the matches",
        "Merchandise (T-shirt)",
      ],
    },
    {
      title: "Option-F",
      price: "Rs. 800/-",
      features : [
        "Participation fees",
        "Pro Nights (EDM night, Band night etc)",
        "Refreshments in between the matches",
      ],
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
            description="For those who want to stay in the IIT-ISM campus"
            price={item.price}
            features={item.features}
            discount="No hidden fees"
            buttonText="Book Now"
          />
        </div>
      ))}
    </div>
  );
};

export default Accompage;
