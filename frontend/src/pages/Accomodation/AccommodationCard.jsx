import React from "react";

const AccommodationCard = ({
  title,
  description,
  price,
  features,
  buttonText = "Choose Plan",
  discount,
}) => {
  return (
    <div className="max-w-sm w-full bg-white dark:bg-black rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl border border-gray-300 dark:border-neutral-700 z-40">
      <div className="p-6 bg-black">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <p className="text-sm text-white/80 mt-2">{description}</p>
      </div>

      <div className="p-6">
        <div className="flex items-end">
          <span className="text-4xl font-bold text-black dark:text-white">
            {price}
          </span>
          <span className="text-lg text-gray-600 dark:text-gray-300 ml-2">
            /month
          </span>
        </div>
        {discount && (
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
            {discount}
          </p>
        )}
      </div>

      <div className="p-6 border-t border-b border-gray-200 dark:border-neutral-700">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
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
                className="h-5 w-5 text-white mr-2"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span className="text-gray-700 dark:text-gray-300">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-6">
        <button className="w-full py-3 bg-white text-black cursor-pointer rounded-lg font-semibold hover:bg-blue-700 transition-colors">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default AccommodationCard;
