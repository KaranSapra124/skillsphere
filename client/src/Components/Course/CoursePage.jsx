import React from "react";
import Container from "../Ui/Container";
import { useLocation } from "react-router-dom";

const CoursePage = () => {
  const location = useLocation();
  const { state } = location;

  const {
    title,
    description,
    instructor,
    duration,
    level,
    start_date,
    end_date,
    price,
    image_url,
    enrolled_users
  } = state;

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          <div className="md:w-2/3">
            <h1 className="text-4xl text-[#201169] font-bold mb-2">{title}</h1>
            <p className="text-gray-700 font-semibold text-lg">
              By <span className="text-seconday-color font-extrabold">{instructor}</span>
            </p>
          </div>
          <button className="bg-[#201169] text-white font-bold rounded p-3 hover:bg-[#1a0e4d] transition duration-300 md:self-center">
            Start Learning
          </button>
        </div>

        <div className="mb-6">
          <img
            className="w-full h-64 object-cover rounded-lg"
            src={image_url}
            alt={title}
          />
          <h2 className="text-lg font-semibold text-gray-700">Enrolled By <span className="text-seconday-color font-extrabold">{enrolled_users}</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-100 h-fit p-4 rounded-lg shadow">
            <h2 className="text-xl  text-[#201169] font-extrabold">
              Course Details
            </h2>
            <div className="mt-2">
              <h3 className="text-md text-gray-700 font-medium">Difficulty:</h3>
              <p className="text-gray-700 font-extrabold">{level}</p>
            </div>
            <div className="mt-2">
              <h3 className="text-md text-gray-700 font-medium">Duration:</h3>
              <p className="text-gray-700 font-extrabold">{duration}</p>
            </div>
            <div className="mt-2">
              <h3 className="text-md text-gray-700 font-medium">Start Date:</h3>
              <p className="text-gray-700 font-extrabold">{start_date}</p>
            </div>
            <div className="mt-2">
              <h3 className="text-md text-gray-700 font-medium">End Date:</h3>
              <p className="text-gray-700 font-extrabold">{end_date}</p>
            </div>
            <div className="mt-2">
              <h3 className="text-lg font-medium">Price:</h3>
              <p className="text-gray-700">${price}</p>
            </div>
            <div className="mt-2">
                <button className="bg-primary-color text-white font-bold p-2 rounded w-full">Have A Query ?</button>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h2 className="text-xl  text-[#201169] font-extrabold">
              About the Course
            </h2>
            <p className="text-gray-700 mt-2 text-md font-semibold">{description}</p>
            <img src={image_url} className="w-full object-fill m-auto p-2  h-48" alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CoursePage;
