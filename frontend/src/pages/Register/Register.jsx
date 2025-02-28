import React, { useState } from "react";
import axios from "axios";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const RegistrationForm = () => {
  const [sportName, setSportName] = useState("Cricket");
  const [players, setPlayers] = useState([
    { name: "", phoneNumber: "", collegeName: "", email: "", sportName },
  ]);

  const handleSportChange = (e) => {
    setSportName(e.target.value);
  };

  const handlePlayerChange = (index, e) => {
    const newPlayers = [...players];
    newPlayers[index][e.target.name] = e.target.value;
    setPlayers(newPlayers);
  };

  const addPlayer = () => {
    setPlayers([
      ...players,
      {
        name: "",
        phoneNumber: "",
        collegeName: "",
        email: "",
        sportName: sportName,
      },
    ]);
  };

  const removePlayer = (index) => {
    const newPlayers = [...players];
    newPlayers.splice(index, 1);
    setPlayers(newPlayers);
  };

  const handleSubmit = async (e) => {
    toast.info("Registering.....");
    e.preventDefault();
    const data = {
      sportName,
      players,
    };
    console.log(data);
    try {
      const response = await axios.post(
        "https://parakram-backend-2.onrender.com/api/teams/register",
        data
      );
      console.log("Response:", response);
      console.log(response)
      if (response.data.success) {
        toast.success("Registered Successfully");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent p-4 relative z-20">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-black p-8 rounded-xl shadow-2xl transition-all duration-300 hover:shadow-gray-800 border border-gray-800"
      >
        <h1 className="text-4xl font-extrabold text-center mb-6 text-white tracking-wide">
          Player Registration
        </h1>

        {/* Sport Selection Dropdown */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Select Sport
          </label>
          <select
            value={sportName}
            onChange={handleSportChange}
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
          >
            <option value="Cricket">Cricket</option>
            <option value="Football">Football</option>
            <option value="Basketball">Basketball</option>
            <option value="Tennis">Tennis</option>
            <option value="Athletics">Athletics</option>
            <option value="Table Tennis">Table Tennis</option>
            <option value="Volleyboll">Volleyboll</option>
            <option value="Chess">Chess</option>
            <option value="Squash">Squash</option>
            <option value="Weightlifting">Weightlifting</option>
            <option value="PowerLifting">PowerLifting</option>
            <option value="Hockey">Hockey</option>
            <option value="Badminton">Badminton</option>
          </select>
        </div>

        {/* Player Details */}
        {players.map((player, index) => (
          <div
            key={index}
            className="mb-6 bg-transparent p-4 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-semibold mb-4 text-white">
              Player {index + 1}
            </h2>

            {/* Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={player.name}
                onChange={(e) => handlePlayerChange(index, e)}
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={player.phoneNumber}
                onChange={(e) => handlePlayerChange(index, e)}
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* College Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                College Name
              </label>
              <input
                type="text"
                name="collegeName"
                value={player.collegeName}
                onChange={(e) => handlePlayerChange(index, e)}
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={player.email}
                onChange={(e) => handlePlayerChange(index, e)}
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Remove Player Button */}
            {players.length > 1 && (
              <button
                type="button"
                onClick={() => removePlayer(index)}
                className="w-full p-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300"
              >
                Remove Player
              </button>
            )}
          </div>
        ))}

        {/* Add Player Button */}
        <button
          type="button"
          onClick={addPlayer}
          className="w-full p-3 bg-white cursor-pointer text-black rounded-lg hover:bg-blue-700 font-extrabold transition-all duration-300 mb-6"
        >
          Add Player
        </button>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-3 cursor-pointer bg-white text-black font-extrabold rounded-lg hover:bg-green-700 transition-all duration-300"
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default RegistrationForm;
