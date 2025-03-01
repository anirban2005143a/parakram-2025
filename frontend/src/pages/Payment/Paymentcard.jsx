import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from "axios";
import FileInput from "../../components/flowbite/FileInput";
import { FaSpinner } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";
import qrImg from '/paymentQR.jpg'
import { useNavigate } from "react-router-dom";

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
  const [isPaymentSuccessful, setisPaymentSuccessful] = useState(false)
  const [isDownloading, setisDownloading] = useState(false)

  const data = {
    type_1: "1200",
    type_2: "1000",
    type_3: "800",
    type_4: "800",
    type_5: "600",
    type_6: "400",
  };

  const navigate = useNavigate()

  
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
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setTransactionPhoto(file);
    }
  };

  const handleSubmit = async () => {
    if (!transactionId || !transactionPhoto) {
      showToast("Please enter the transaction ID and upload a photo.", 1);
      return;
    }
    setisLoading(true);
    const totalPrice = sending_data.reduce(
      (sum, item) => sum + Number(item.price || 0),
      0
    );

    const teamid = window.localStorage.getItem("TeamID");
    console.log(teamid)
    const formData = new FormData();
    formData.append("teamId", teamid);
    formData.append("transactionId", transactionId);
    formData.append("paymentScreenshot", transactionPhoto);
    formData.append("amountPaid", totalPrice);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_BACKEND_URL}/api/payments/process`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Server Response:", response);
      showToast("Transaction uploaded successfully!", 0);
      setisPaymentSuccessful(response.data.success)
      handelDownloadRecipt()
    } catch (error) {
      console.error(error);
      // showToast(error.response?.data?.message || "Transaction failed!", 1);
      if (error.response && error.response.data) showToast(error.response.data.message, 1)
      else showToast(error.message, 1)
    } finally {
      setisLoading(false);
    }
  };

  const handelDownloadRecipt = async () => {
    try {
      setisDownloading(true)
      const response = await axios.get(`${import.meta.env.VITE_REACT_BACKEND_URL}/api/pdf/download/${window.localStorage.getItem('TeamID')}`, {
        responseType: 'blob', // Important: Set responseType to 'blob' to handle binary data
      });
      console.log(response)
      // Create a URL for the blob
      const url = window.URL.createObjectURL(new Blob([response.data]));

      // Create a temporary anchor element to trigger the download
      const link = document.createElement('a');
      link.href = url;

      // Extract the filename from the response headers
      const contentDisposition = response.headers['content-disposition'];
      let fileName = 'downloaded-file.pdf'; // Default filename

      if (contentDisposition && contentDisposition.includes('filename=')) {
        fileName = contentDisposition
          .split('filename=')[1]
          .split(';')[0]
          .replace(/['"]/g, ''); // Remove any quotes around the filename
      }

      // Set the download attribute with the filename
      link.setAttribute('download', fileName);

      // Append the anchor to the body and trigger the download
      document.body.appendChild(link);
      link.click();

      // Clean up by removing the anchor and revoking the blob URL
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      // console.log('File downloaded successfully');
      showToast('Recipt download succesfully' , 0)
      navigate("/")
    } catch (error) {
      console.log(error)
      if (error.response && error.response.data) showToast(error.response.data.message, 1)
      else showToast(error.message, 1)
    } finally {
      setisDownloading(false)
    }
  }

  const totalPrice = sending_data.reduce(
    (sum, item) => sum + Number(item.price || 0),
    0
  );

  return (
    <>
      <div
        ref={cardRef}
        className="max-w-xl w-full bg-[#0000004f] backdrop-blur-xs rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl border border-neutral-700 z-40 transform hover:scale-101"
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

        <div className="p-6 border-t border-b border-neutral-700">
          <div className="text-center text-3xl md:text-4xl text-white z-30">
            only Rs. <span className="font-extrabold">{totalPrice}</span> /-
          </div>
        </div>

        {/* QR Image */}
        <div className="w-40 h-40 mx-auto my-4 rounded-2xl">
          <img
            src={qrImg}
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
            className="w-full px-3 py-2 bg-white/10 border border-neutral-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

        {/* pdf download btn  */}
        {/* {isPaymentSuccessful && <div className="download-btn w-full px-3 justify-center flex mb-5">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              handelDownloadRecipt()
            }}
            className="text-white cursor-pointer bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            {isDownloading ? (
              <FaSpinner className=" animate-spin mx-auto" />
            ) : (
              "Download Recipt"
            )}
          </button>

        </div>} */}
      </div>
      <ToastContainer />
    </>
  );
};

export default AccommodationCard;

