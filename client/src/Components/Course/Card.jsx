import React from "react";
import { FaClock, FaIndianRupeeSign } from "react-icons/fa6";

const Card = ({ title, image, price, duration, category }) => {
  return (
    <div className="flex flex-col w-72 space-y-4 rounded-b  cursor-pointer hover:scale-105 my-2 transition-all     shadow-lg">
      <img className="h-36 object-cover rounded " src={image} alt="" />
      <div className="p-2">
        <h2 className="text-gray-700 font-semibold text-sm">{category}</h2>
        <h1 className="text-lg text-seconday-color py-2 font-bold ">{title}</h1>
        <div className="flex py-2 justify-evenly">
          <div className="flex items-center">
            <FaIndianRupeeSign className="mx-1 text-primary-color" />
            <span>{price}</span>
          </div>
          <div className="flex items-center">
            {" "}
            <FaClock className="mx-1 text-primary-color" />
            <span>{duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
