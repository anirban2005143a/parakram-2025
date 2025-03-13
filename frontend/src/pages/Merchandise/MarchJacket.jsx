import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import jacket1 from '/jacket1.png'
import jacket2 from '/jacket2.png'
import jacket3 from '/jacket3.png'

const images = [
    jacket1,
    jacket2,
    jacket3
];

const Carouseljacket = () => {
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
            className="relative w-full  bg-white py-4 overflow-hidden mt-10"
            style={{ objectFit: "fill" }}
        >
            <div>
                <div
                    className="flex transition-transform duration-500 ease-in-out "
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Slide ${index + 1}`}
                            className="w-full flex-shrink-0 h-full object-contain max-h-[80vh] "
                        />
                    ))}
                </div>

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

export default Carouseljacket;
