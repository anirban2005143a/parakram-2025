
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const GameDialog = ({ isOpen, onClose, imageUrl, gameInfo }) => {
  if (!isOpen) return null;

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

  const handlingregister = () => {
    //  navigate('/event/registration')
    showToast("Registration has closed", 1)
  }
  return (
    <>

      <ToastContainer />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed w-screen h-screen top-0 left-0 inset-0 z-50 flex items-center justify-center bg-[#000000b2] backdrop-blur-xs"
          >
            <motion.div
              initial={{ scale: 0.8, y: -50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: -50 }}
              className="bg-neutral-900 rounded-xl shadow-2xl overflow-hidden lg:w-6/12 md:w-8/12 sm:w-10/12 w-full mx-4 p-3 h-[80%] overflow-y-auto min-h-[300px] flex flex-col justify-between"
            >
              {/* Image Section */}
              <div className="relative w-full h-[60%]">
                <img
                  src={imageUrl}
                  alt="Game"
                  className="w-full h-full object-contain"
                />
                <button
                  onClick={onClose}
                  className="absolute top-2 right-2 p-2 bg-neutral-800 rounded-full hover:bg-neutral-700 transition-colors cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-white"
                  >
                    <path d="M18 6L6 18" />
                    <path d="M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Game Info Section */}
              <div className="sm:p-4 m-3 h-auto flex flex-col justify-between">
                <h2 className="text-2xl font-bold text-white">
                  {gameInfo.title}
                </h2>
                <p className=" text-gray-300">
                  {gameInfo.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-4 py-4">
                  <button
                    onClick={onClose}
                    className="flex-1 py-2 px-4 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-colors cursor-pointer "
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handlingregister}
                    className="flex-1 py-2 px-4 bg-[#238636] text-white rounded-lg hover:bg-[#243822]  transition-colors cursor-pointer"
                  >
                    Register
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GameDialog;
