import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const GameDialog = ({ isOpen, onClose, imageUrl, gameInfo }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000b2] backdrop-blur-xs"
        >
          <motion.div
            initial={{ scale: 0.8, y: -50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: -50 }}
            className="bg-white dark:bg-neutral-900 rounded-xl shadow-2xl overflow-hidden max-w-md w-full mx-4"
          >
            {/* Image Section */}
            <div className="relative h-48 w-full">
              <img
                src={imageUrl}
                alt="Game"
                className="w-full h-full object-cover"
              />
              <button
                onClick={onClose}
                className="absolute top-2 right-2 p-2 bg-white dark:bg-neutral-800 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors cursor-pointer"
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
                  className="h-4 w-4 text-black dark:text-white"
                >
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Game Info Section */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                {gameInfo.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {gameInfo.description}
              </p>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={onClose}
                  className="flex-1 py-2 px-4 bg-gray-200 dark:bg-neutral-800 text-black dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-neutral-700 transition-colors cursor-pointer "
                >
                  Cancel
                </button>
                <button
                  onClick={() => alert("Registered!")}
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
  );
};

export default GameDialog;