import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import FileInput from "../../components/flowbite/FileInput";
import { FaSpinner } from "react-icons/fa6";

const RegistrationForm = () => {
  const [sportName, setSportName] = useState("Cricket");
  const [isLoading, setisLoading] = useState(false)

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

  //function to show alert
  const showToast = (message, err) => {
    if (err == 1) {
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
    } else if (err == 0) {
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
  }

  const handleSubmit = async (e) => {
    setisLoading(true)
    showToast("Registering...", 2);
    e.preventDefault();
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
      console.log(response)
      if (response.data.success) {
        showToast("Registered Successfully", 0)
      }
    } catch (error) {
      console.log(error)
      if (error.response && error.response.data) showToast(error.response.data.message, 1)
      else showToast(error.message, 1)
    } finally {
      setisLoading(false)
    }
  };

  return (
    <div className="min-h-screen md:w-7/12 w-full flex items-center justify-center bg-transparent md:p-4 p-2 relative z-20">
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
          <div
            key={index}
            className="my-6 bg-transparent rounded-lg shadow-md"
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

            {/* admin id photo */}
            {/* <FileInput /> */}

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
          disabled={isLoading}
          type="submit"
          className="w-full p-3 text-center cursor-pointer bg-white text-black font-extrabold rounded-lg hover:bg-blue-500 transition-all duration-300"
        >
          {isLoading ? <FaSpinner className=" animate-spin mx-auto" /> : "Next"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default RegistrationForm;
