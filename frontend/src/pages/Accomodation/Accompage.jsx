import React from "react";
import AccommodationCard from "./AccommodationCard";

const Accompage = () => {
  const features = [
    "Access to All Features",
    "20% discount on backorders",
    "Domain name Appraisal",
    "10 Social Profiles",
  ];
  const data = [
    {
      title: "For those who want to stay in the IIT-ISM campus A",
      price: "Rs. 1949/-",
    },
    {
      title: "For those who want to stay in the IIT-ISM campus A",
      price: "Rs. 1549/-",
    },
    {
      title: "For those who want to stay in the IIT-ISM campus A",
      price: "Rs. 1149/-",
    },
    {
      title: "For those who want to stay in the IIT-ISM campus A",
      price: "Rs. 1299/-",
    },
    {
      title: "For those who want to stay in the IIT-ISM campus A",
      price: "Rs. 899/-",
    },
    {
      title: "For those who want to stay in the IIT-ISM campus A",
      price: "Rs. 399/-",
    },
  ];

  return (
    <div className="flex flex-wrap gap-20 sm:gap-20 lg:gap-49  justify-center bg-gray-100 p-7">
      {data.map((item, index) => (
        <AccommodationCard
          key={index} 
          title={item.title} 
          description="Comfortable and affordable stay within the IIT-ISM campus."
          price={item.price}
          features={features}
          discount="No hidden fees"
          buttonText="Book Now"
        />
      ))}
    </div>
  );
};

export default Accompage;
