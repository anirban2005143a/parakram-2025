import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
import GameCard from "./Ecard.jsx";
gsap.registerPlugin(ScrollTrigger);

function Event() {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  const events = [
    {
      name: "Athletics",
      image: "/sports/9.png",
    },
    {
      name: "Badminton",
      image: "/sports/8.png",
    },
    {
      name: "Basketball",
      image: "/sports/6.png",
    },
    {
      name: "Chess",
      image: "/sports/10.png",
    },
    {
      name: "Cricket",
      image: "/sports/7.png",
    },
    {
      name: "Football",
      image: "/sports/5.png",
    },
    {
      name: "Hockey",
      image: "/sports/3.png",
    },
    {
      name: "Powerlifting",
      image: "/sports/2.png",
    },
    {
      name: "Squash",
      image: "/sports/Squashv.jpg",
    },
    {
      name: "Table Tennis",
      image: "/sports/11.webp",
    },
    {
      name: "Volleyball",
      image: "/sports/4.png",
    },
    {
      name: "WeightLifting",
      image: "/sports/12.jpg",
    },
    {
      name: "Lawn Tennis",
      image: "/sports/13.jpg",
    },
    {
      name: "Karate",
      image: "/sports/15.jpg",
    },
    {
      name: "Kabaddi",
      image: "/sports/14.png",
    },
  ];

  useEffect(() => {
    // GSAP Animation with ScrollTrigger
    document.querySelectorAll(".event-card-group").forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card, // Trigger animation when the card enters the viewport
          scroller: document.body,
          start: "top 90%", // Start animation when the top of the card is 80% in view
          end: "top 70%", // End animation when the bottom of the card is 20% in view
        },
      });
    });
  }, []);

  return (
    <>
      <div className="mb-12 text-white text-center text-3xl font-bold">
        Sports Events
      </div>

      <div
        ref={containerRef}
        className="flex w-full overflow-hidden justify-center flex-wrap gap-3 md:gap-5 lg:gap-8 px-4"
      >
        {/* {events.map((event, index) => (
          <GameCard key={index} gameName={event.name} image={event.image} />
        ))} */}
        {events.map((event, index) => (
          <div key={index}>
            <GameCard gameName={event.name} image={event.image} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Event;
