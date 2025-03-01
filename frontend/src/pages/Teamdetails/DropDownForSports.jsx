import React, { useState } from "react";

const DropdownBtnForSports = ({ options, setselectedSports }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setselectedSports(option); // Pass the selected option to the parent component
        setIsOpen(false); // Close the dropdown after selection
    };

    return (
        <div className="relative inline-block text-left">
            {/* Dropdown Button */}
            <div>
                <button
                    type="button"
                    onClick={toggleDropdown}
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    {selectedOption || "Select an option"}
                    <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                    <div className="origin-top-right h-45 overflow-y-auto right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            {options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleOptionClick(option)}
                                    className="block w-full px-4 py-2 text-sm text-center cursor-pointer text-gray-800 hover:bg-gray-200 hover:text-gray-900"
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>


        </div>
    );
};

export default DropdownBtnForSports;