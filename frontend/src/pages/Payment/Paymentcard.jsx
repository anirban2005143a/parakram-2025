import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from "axios";

gsap.registerPlugin(ScrollTrigger);

const AccommodationCard = ({
  title,
  description,
  buttonText = "Choose Plan",
  sending_data = [],
}) => {
  const cardRef = useRef(null);
  const titleRef = useRef(null);
  const buttonRef = useRef(null);

  const [type, setType] = useState("");
  const [money, setMoney] = useState("---");
  const [transactionId, setTransactionId] = useState(""); // State for transaction ID
  const [transactionPhoto, setTransactionPhoto] = useState(null); // State for transaction photo

  const data = {
    type_1: "1200",
    type_2: "1000",
    type_3: "800",
    type_4: "600",
    type_5: "400",
  };

  const handlingchange = (e) => {
    const selectedType = e.target.value;
    setType(selectedType);
    setMoney(data[selectedType] || "");
  };

  const handleTransactionIdChange = (e) => {
    setTransactionId(e.target.value);
  };

  const handleTransactionPhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setTransactionPhoto(file);
    }
  };

  const handleSubmit = async () => {
    if (!transactionId || !transactionPhoto) {
      alert("Please enter the transaction ID and upload a photo.");
      return;
    }

    const teamid = localStorage.getItem("TeamID");

    const formData = new FormData();
    formData.append("teamid", teamid);
    formData.append("transactionId", transactionId);
    formData.append("transactionPhoto", transactionPhoto); // Correct way to send file

    try {
      console.log(formData)
      const response = await axios.post(
        "https://parakram-backend-git-master-sai-rugveds-projects.vercel.app/api/process",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", 
          },
        }
      );
      console.log(response);
      alert(`Transaction ID: ${transactionId}\nPhoto uploaded successfully!`);
    } catch (error) {
      console.error("Error uploading transaction photo:", error);
      alert("Failed to upload. Please try again.");
    }
  };

  const totalPrice = sending_data.reduce(
    (sum, item) => sum + Number(item.price || 0),
    0
  );

  return (
    <div
      ref={cardRef}
      className="max-w-sm w-full bg-[#ffffff72] dark:bg-[#0000004f] backdrop-blur-xl rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl border border-gray-300 dark:border-neutral-700 z-40 transform hover:scale-105"
    >
      <div className="p-6">
        <h2
          ref={titleRef}
          className="text-2xl md:text-3xl text-center font-bold text-white"
        >
          {title}
        </h2>
        <p className="text-sm md:text-base text-white/80 mt-2 text-center">
          {description}
        </p>
      </div>

      {sending_data.map((item, index) => (
        <div
          key={index}
          className="p-2 text-white text-center hover:bg-white/10 transition-colors duration-200"
        >
          <b className="text-xl md:text-2xl">
            {item.playername} : Rs. {item.price}/-
          </b>
        </div>
      ))}

      <div className="p-6 border-t border-b border-gray-200 dark:border-neutral-700">
        <div className="text-center text-3xl md:text-4xl text-white z-30">
          only Rs. <span className="font-extrabold">{totalPrice}</span> /-
        </div>
      </div>

      {/* QR Image */}
      <div className="w-40 h-40 mx-auto my-4 rounded-2xl">
        <img
          src="https://ik.imagekit.io/ikmedia/Graphics/AI%20Landing%20page/Text%20prompt%20in%20URL.jpg?updatedAt=1726226940145&tr=w-1250"
          alt="QRS"
          className="w-full h-full object-fill rounded-2xl"
        />
      </div>

      {/* Transaction ID Input */}
      <div className="p-4">
        <label className="block text-sm font-medium text-white mb-2">
          Transaction ID
        </label>
        <input
          type="text"
          value={transactionId}
          onChange={handleTransactionIdChange}
          className="w-full px-3 py-2 bg-white/10 border border-gray-300 dark:border-neutral-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your transaction ID"
        />
      </div>

      {/* Transaction Photo Upload */}
      <div className="p-4">
        <label className="block text-sm font-medium text-white mb-2">
          Upload Transaction Photo
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleTransactionPhotoChange}
          className="w-full text-white p-1 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
        />
      </div>

      {/* Submit Button */}
      <div className="p-6">
        <button
          onClick={handleSubmit}
          className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default AccommodationCard;
