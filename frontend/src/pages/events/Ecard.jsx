import React, { useState } from "react";
import GameDialog from "./Dialogbox.jsx"; // Import the GameDialog component

const GameCard = ({ gameName, image }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const gameInfo = {
    title: gameName,
    description:
      "Embark on an epic journey through mystical lands. Battle fierce monsters, solve ancient puzzles, and uncover hidden treasures.",
  };

  return (
    <div className=" p-4 my-4 border-amber-100 ">
      {/* <div
        className="relative bg-cover rotate-1  bg-center rounded-xl shadow-2xl overflow-hidden transition-all duration-500 transform group"
        style={{
          backgroundImage: `url('${image}')`,
          height: "500px",
        }}
      >
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent"></div>

        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          <h2 className="text-3xl mt-0 text-center font-bold mb-52 drop-shadow-lg">
            {gameName}
          </h2>
          <button
            className="bg-white text-black py-2 px-6 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300 cursor-pointer"
            onClick={() => setIsDialogOpen(true)} 
          >
            View More
          </button>
        </div>
      </div> */}

      <div
        className="w-[320px] h-[480px] bg-[#00000060] skew-x-[-5deg] bg-blend-darken bg-cover bg-center rounded-xl shadow-2xl overflow-hidden transition-all duration-500 transform group"
        style={{
          backgroundImage: `url('${image}')`,
          // transform: "skewX(0deg)", // Skew the card to create the rhombus effect
          margin: "0 auto", // Center the card
        }}
      >
        {/* Only covering the bottom half so button is clickable */}
        {/* <div
          className=" inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent"
          style={{
            transform: "skewX(20deg)", // Counter-skew the gradient to align with the card
            transformOrigin: "bottom left",
          }}
        ></div> */}

        <div
          className=" inset-0 flex h-full w-full flex-col justify-end p-6 text-white"
          style={{
            transform: "skewX(0deg)", // Counter-skew the content to align with the card
            transformOrigin: "bottom left",
          }}
        >
          <h2 className="text-3xl mt-0 h-full pt-[20px] text-center font-bold mb-52 drop-shadow-lg">
            {gameName}
          </h2>
          <button
            className="bg-white text-black py-2 px-6 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300 cursor-pointer"
            onClick={() => setIsDialogOpen(true)} // Open the dialog on click
          >
            View More
          </button>
        </div>
      </div>
      <GameDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        imageUrl={image}
        gameInfo={gameInfo}
      />
    </div>
  );
};

export default GameCard;
