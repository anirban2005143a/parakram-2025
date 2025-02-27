import React from "react";

const GameCard = ({ gameName, image }) => {
  const run = () => {
    console.log("hogaya");
  };

  return (
    <div className="max-w-xs w-full p-4 border-amber-100">
      <div
        className="relative bg-cover rotate-5 hover:rotate-0 bg-center rounded-xl shadow-2xl overflow-hidden transition-all duration-500 transform group"
        style={{
          backgroundImage: `url('${image}')`,
          height: "500px",
        }}
      >
        {/* Only covering the bottom half so button is clickable */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>

        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          <h2 className="text-3xl mt-0 text-center font-bold mb-64 drop-shadow-lg">
            {gameName}
          </h2>
          <button
            className="bg-white text-black py-2 px-6 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300 cursor-pointer"
            onClick={run}
          >
            Stream now
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
