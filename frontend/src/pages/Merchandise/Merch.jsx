import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://res.cloudinary.com/dmf9vpeu2/image/upload/v1708955492/T-shirt_mlb5tv.png",
  "https://res.cloudinary.com/dmf9vpeu2/image/upload/v1708955492/Jacket_h6xhte.png",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (direction === "next") {
        nextSlide();
      } else {
        prevSlide();
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, direction]);

  return (
    <div
      className="relative w-full min-h-fit overflow-hidden mt-10"
      style={{ objectFit: "fill" }}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full flex-shrink-0"
          />
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full cursor-pointer"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full cursor-pointer"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
