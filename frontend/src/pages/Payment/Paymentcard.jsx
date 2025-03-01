import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from "axios";
import FileInput from "../../components/flowbite/FileInput";
import { FaSpinner } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";

gsap.registerPlugin(ScrollTrigger);

const AccommodationCard = ({
  title,
  description,
  buttonText = "Choose Plan",
  sending_data = [],
}) => {
  const [isLoading, setisLoading] = useState(false);

  const cardRef = useRef(null);
  const titleRef = useRef(null);
  const buttonRef = useRef(null);

  const [type, setType] = useState("");
  const [money, setMoney] = useState("---");
  const [transactionId, setTransactionId] = useState(""); // State for transaction ID
  const [transactionPhoto, setTransactionPhoto] = useState(null); // State for transaction photo
  const [SelectedImage, setSelectedImage] = useState(null);

  const data = {
    type_1: "1200",
    type_2: "1000",
    type_3: "800",
    type_4: "800",
    type_5: "600",
    type_6: "400",
  };
  const showToast = (message, err) => {
    if (err === 1) {
      toast.error(message, {
        position: "top-left",
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
      console.log("Selected File:", file); // Debugging
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setTransactionPhoto(file);
    }
  };

  const handleSubmit = async () => {
    if (!transactionId || !transactionPhoto) {
      showToast("Please enter the transaction ID and upload a photo.", 1);
      // toast.error("Please enter the transaction ID and upload a photo.");
      return;
    }
    setisLoading(true);
    const totalPrice = sending_data.reduce(
      (sum, item) => sum + Number(item.price || 0),
      0
    );

    const teamid = localStorage.getItem("TeamID");

    const formData = new FormData();
    formData.append("teamid", teamid);
    formData.append("transactionId", transactionId);
    formData.append("paymentScreenshot", transactionPhoto);
    formData.append("amountPaid", totalPrice);

    try {
      const response = await axios.post(
        "https://parakram-backend-git-master-sai-rugveds-projects.vercel.app/api/payments/process",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Server Response:", response);
      showToast("Transaction uploaded successfully!", 0);
    } catch (error) {
      console.error("Error uploading transaction photo:", error);
      showToast(error.response?.data?.message || "Transaction failed!", 1);
    } finally {
      setisLoading(false);
    }
  };

  const totalPrice = sending_data.reduce(
    (sum, item) => sum + Number(item.price || 0),
    0
  );

  return (
    <>
      <div
        ref={cardRef}
        className="max-w-xl w-full bg-[#ffffff72] dark:bg-[#0000004f] backdrop-blur-xs rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl border border-gray-300 dark:border-neutral-700 z-40 transform hover:scale-105"
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
          {/* <input
          type="file"
          accept="image/*"
          onChange={handleTransactionPhotoChange}
          className="w-full text-white p-1 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
        /> */}
          <FileInput
            handleTransactionPhotoChange={handleTransactionPhotoChange}
          />

          {/* Display selected image */}
          {SelectedImage && (
            <div className="mt-4">
              <img
                src={SelectedImage}
                alt="Selected"
                className="max-w-full h-auto rounded-lg mx-auto"
                style={{ maxHeight: "300px" }}
              />
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="p-6">
          <button
            type="submit"
            className="w-full p-3  cursor-pointer bg-white text-black font-extrabold rounded-lg hover:bg-blue-500 transition-all duration-300"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            {isLoading ? (
              <FaSpinner className=" animate-spin mx-auto" />
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default AccommodationCard;
