import React, { useEffect, useRef } from "react";
import "./Header.css"; // Ensure this file contains any additional styles you need
import Container from "../Ui/Container";

const Header = () => {
  const videoRef = useRef(null);
  useEffect(() => {
   videoRef.current && videoRef.current.play();
  }, []);
  return (
    <>
      <Container>
        {/* <div className="h-full"> */}
        <div className="flex  max-[600px]:flex-col  max-w-screen-xl  mx-auto  items-center ">
          <div>
            <h1 className="text-4xl text-seconday-color font-bold">
              It's time to amplify your{" "}
              <span className="text-primary-color text-4xl font-extrabold">
                online career!
              </span>
            </h1>
            <p className="text-sm  text-gray-700 font-semibold   pt-5">
              Welcome to our Learning Management System, where education meets
              innovation! Our platform is designed to provide learners with a
              seamless and engaging experience, offering a wide range of courses
              tailored to meet diverse learning needs. Whether you're looking to
              enhance your skills, explore new subjects, or advance your career,
              we have the resources and support to help you succeed. Join our
              vibrant community of learners and educators, and embark on a
              journey of knowledge and personal growth today!
            </p>
            <div className="flex flex-col md:flex-row mt-5">
              <button className="border bg-primary-color text-white font-bold px-4 py-2 rounded-xl mb-2 md:mb-0 md:mr-2">
                Get Started
              </button>
              <button className="border mx-2  bg-seconday-color text-white font-bold px-4 py-2 rounded-xl">
                Learn more
              </button>
            </div>
          </div>
          <video
            ref={videoRef}
            id="videoId"
            src="https://videos.pexels.com/video-files/6334253/6334253-sd_960_506_25fps.mp4"
            loop
            autoPlay
            className="max-w-screen-sm rounded"
          ></video>
        </div>
        {/* </div> */}
      </Container>
    </>
  );
};

export default Header;
