import React, { useState } from "react";

const GameCard = ({ gameName, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleToggle = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className="max-w-xs w-full p-4">
      <div
        className={`relative bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl shadow-2xl overflow-hidden transition-all duration-500 transform ${
          isHovered ? "scale-105 shadow-3xl rotate-1" : ""
        } group`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleToggle} // Works for mobile
      >
        <img
          src={image}
          alt={gameName}
          className="w-full h-48 object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
          <h2 className="text-2xl font-bold text-white drop-shadow-lg transition-all duration-500 group-hover:text-3xl">
            {gameName}
          </h2>
        </div>
        {/* Show "View Details" on hover or click (mobile) */}
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center opacity-100 transition-opacity duration-500">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-2">
              <span className="text-white text-sm font-semibold">View Details</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameCard;
