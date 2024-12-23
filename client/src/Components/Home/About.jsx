import React from "react";
import Container from "../Ui/Container";

const About = () => {
  return (
    <Container>
      <h1 className="md:text-4xl py-5 font-bold text-seconday-color text-center">
        About Us
      </h1>
      <div className="flex flex-col md:flex-row items-center space-x-5">
        <div className="w-full ">
          <p className="text-gray-700 text-md font-semibold ">
            Welcome to SkillSphere, your ultimate destination for online
            learning and professional development. At SkillSphere, we believe in
            empowering individuals through education and skill enhancement. Our
            platform offers a diverse range of courses designed to cater to
            various learning needs, whether you're looking to advance your
            career, explore new subjects, or simply learn something new.
          </p>
          <p className="text-gray-700 text-md font-semibold  mt-4">
            Our team of experienced instructors is dedicated to providing
            high-quality education and support. We strive to create a vibrant
            community of learners and educators, fostering collaboration and
            knowledge sharing. With flexible scheduling and a user-friendly
            interface, SkillSphere makes it easy for you to learn at your own
            pace, anytime and anywhere.
          </p>
          <p className="text-gray-700 text-md font-semibold  mt-4">
            Join us at SkillSphere and embark on a journey of personal and
            professional growth. Together, we can unlock your potential and help
            you achieve your goals!
          </p>
        </div>
        <img
          className=" w-1/3 rounded-lg "
          src="./assets/AboutImg.jpg"
          alt="About SkillSphere"
        />
      </div>
    </Container>
  );
};

export default About;
