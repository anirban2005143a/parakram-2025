import React from "react";
import GameCard from "./Ecard.jsx";

function Event() {
  const events = [
    {
      name: "Athletics",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&auto=format&fit=crop&q=60",
    },
    {
      name: "Badminton",
      image:
        "https://images.unsplash.com/photo-1623998021722-b934f73081df?w=600&auto=format&fit=crop&q=60",
    },
    {
      name: "Basketball",
      image:
        "https://images.pexels.com/photos/69773/uss-nimitz-basketball-silhouettes-sea-69773.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Chess",
      image:
        "https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?w=600&auto=format&fit=crop&q=60",
    },
    {
      name: "Cricket",
      image:
        "https://media.istockphoto.com/id/641186582/photo/batsman-on-the-stadium-in-action.webp?a=1&b=1&s=612x612&w=0&k=20&c=VVUv7TFlghQVpEdDqzh3YcLHI_gnATQyVr3oOtM4xSw=",
    },
    {
      name: "Football",
      image:
        "https://media.istockphoto.com/id/860880772/photo/determined-bicycle-kick-on-a-soccer-match.webp?a=1&b=1&s=612x612&w=0&k=20&c=BMlbLztq5r4LqRBMRInsJ-DOsdBRJcVAGPmHNeb7OQ4=",
    },
    {
      name: "Hockey",
      image:
        "https://images.unsplash.com/photo-1554539484-e4fab56d4a5c?w=600&auto=format&fit=crop&q=60",
    },
    {
      name: "Powerlifting",
      image:
        "https://plus.unsplash.com/premium_photo-1664298367434-0408974ab0bb?w=600&auto=format&fit=crop&q=60",
    },
    {
      name: "Squash",
      image:
        "https://images.unsplash.com/photo-1554290813-ec6a2a72e5c7?w=600&auto=format&fit=crop&q=60",
    },
    {
      name: "Table Tennis",
      image:
        "https://media.istockphoto.com/id/1417521713/photo/man-serving-ping-pong-ball.webp?a=1&b=1&s=612x612&w=0&k=20&c=ApaZcwsFizP4dRDwCH-Cq9dZ0e8bmaKMBdc_HcNz_jU=",
    },
    {
      name: "Volleyball",
      image:
        "https://images.unsplash.com/photo-1728971121667-80d6513f83e1?w=600&auto=format&fit=crop&q=60",
    },
    {
      name: "WeightLifting",
      image:
        "https://plus.unsplash.com/premium_photo-1722556828905-51b00497fa2b?w=600&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <>
      <div className="mb-12 text-white text-center text-3xl font-bold">
        Sports Events
      </div>
      {/* Grid Layout for Cards */}
      <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-6 sm:gap-x-10 md:gap-x-16 lg:gap-x-20 gap-y-9 px-4">
          {events.map((event, index) => (
            <GameCard key={index} gameName={event.name} image={event.image} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Event;
