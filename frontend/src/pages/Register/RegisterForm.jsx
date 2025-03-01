import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { FaSpinner } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [sportName, setSportName] = useState("Cricket");
  const [isLoading, setisLoading] = useState(false);
  const [players, setPlayers] = useState([
    {
      name: "",
      phoneNumber: "",
      collegeName: "",
      email: "",
      idCardLink: "",
      sportName: "Cricket",
      type: "",
      money: "---",
    },
  ]);
  const handleSportChange = (e) => {
    const newSportName = e.target.value;
    setSportName(newSportName);
    // Update sportName for all players
    setPlayers(
      players.map((player) => ({
        ...player,
        sportName: newSportName,
      }))
    );
  };

  const priceData = {
    type_1: "1200",
    type_2: "1000",
    type_3: "800",
    type_4: "800",
    type_5: "600",
    type_6: "400",
  };

  const handleTypeChange = (index, e) => {
    const selectedType = e.target.value;
    const newPlayers = [...players];
    newPlayers[index].type = selectedType;
    newPlayers[index].money = priceData[selectedType] || "---";
    setPlayers(newPlayers);
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
        idCardLink: "",
        sportName: sportName,
        type: "", // Initialize with empty type
        money: "---", // Initialize with default money value
      },
    ]);
  };

  const removePlayer = (index) => {
    const newPlayers = [...players];
    newPlayers.splice(index, 1);
    setPlayers(newPlayers);
  };

  // Prepare data for payment
  const sending_data = players.map((player) => ({
    playername: player.name,
    price: player.money,
  }));

  //function to show alert
  //function to show alert
  const showToast = (message, err) => {
    if (err === 1) {
      toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if (err === 0) {
      toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.info(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const handleSubmit = async (e) => {
    showToast("Registering.....", 2);
    setisLoading(true);
    e.preventDefault();

    // Check if all players have a selected payment type
    const allPlayersHaveType = players.every((player) => player.type !== "");
    if (!allPlayersHaveType) {
      showToast("Please select a payment type for all players", 1);
      return;
    }

    const data = {
      sportName,
      players,
    };
    console.log(data);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_BACKEND_URL}/api/teams/register`,
        data
      );
      console.log("Response:", response);
      console.log(response);
      if (response.data.success) {
        localStorage.setItem("TeamID", response.data.data.team.teamId);
        showToast("Registered Successfully", 0);
        navigate("/event/payment", { state: { sending_data } });
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data)
        showToast(error.response.data.message, 1);
      else showToast(error.message, 1);
    } finally {
      setisLoading(false);
    }
  };

  return (
    <div className="min-h-screen md:w-7/12 w-full flex items-center justify-center bg-transparent  md:p-4 p-2 relative z-20">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-[#0000006e] md:p-8 p-4  rounded-xl shadow-2xl transition-all duration-300 hover:shadow-gray-800 border border-gray-800"
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
            className="w-full p-3 bg-[#000000] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
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
          <div key={index} className="my-6 bg-transparent rounded-lg shadow-md">
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
                className="w-full p-3 bg-[#0000009d] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
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
                className="w-full p-3 bg-[#0000009d] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
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
                className="w-full p-3 bg-[#0000009d] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
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
                className="w-full p-3 bg-[#0000009d] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* ID card drive link */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                ID Card Drive Link
              </label>
              <input
                type="text"
                name="idCardLink"
                value={player.idCardLink}
                onChange={(e) => handlePlayerChange(index, e)}
                className="w-full p-3 bg-[#0000009d] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Type of payment selection - Each player has their own independent dropdown */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Select Payment Type
              </label>
              <select
                value={player.type}
                onChange={(e) => handleTypeChange(index, e)}
                className="w-full p-3 bg-[#000000] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="selecttype"> select pack type</option>
                <option value="type_1"> Type 1 Rs.1200</option>
                <option value="type_2"> Type 2 Rs.1000</option>
                <option value="type_3"> Type 3 Rs.800</option>
                <option value="type_4"> Type 4 Rs.800</option>
                <option value="type_5"> Type 5 Rs.600</option>
                <option value="type_6"> Type 6 Rs.400</option>
              </select>
            </div>

            {/* Payment amount display */}
            <div className="p-6 border-t border-b border-gray-200 dark:border-neutral-700">
              {player.money && player.money !== "---" && (
                <div className="text-center text-3xl text-white z-30">
                  only Rs.{" "}
                  <text className="font-extrabold">{player.money}</text> /-
                </div>
              )}
            </div>
            {/* Remove Player Button */}
            {players.length > 1 && (
              <button
                type="button"
                onClick={() => removePlayer(index)}
                className="w-full p-3 my-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300"
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
          className="w-full p-3  bg-white cursor-pointer text-black rounded-lg hover:bg-blue-700 font-extrabold transition-all duration-300 mb-6"
        >
          Add Player
        </button>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-3  cursor-pointer bg-white text-black font-extrabold rounded-lg hover:bg-blue-500 transition-all duration-300"
          disabled={isLoading}
        >
          {isLoading ? (
            <FaSpinner className=" animate-spin mx-auto" />
          ) : (
            "Next Payment"
          )}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default RegistrationForm;
