import React from "react";
import Container from "../Ui/Container";
const Explore = () => {
  return (
    <>
      <Container className={"bg-gray-100"}>
        <h2 className="text-4xl text-center text-seconday-color font-bold uppercase py-5">
          Explore Our <span className="text-primary-color font-extrabold">Courses !</span>
        </h2>
        <div className="flex flex-col  md:flex-row space-x-10">
          <div className="flex flex-col    ">
            <h1 className="text-2xl text-primary-color font-bold  my-4">
              Get Instant Access To Expert Solutions
            </h1>
            <p className="text-gray-700 font-semibold mb-6 w-full ">
              Whether you're starting a new journey or advancing your skills,
              our diverse range of courses is designed to help you succeed.
              Discover your path with expertly crafted lessons, hands-on
              projects, and real-world applications.
            </p>
            <p className="text-gray-700 font-semibold mb-6 w-full ">
              Whether you are here to advance your career, learn a new hobby, or
              simply satisfy your curiosity, we have the resources and support
              to help you succeed. Dive in, explore our offerings, and embark on
              your journey of knowledge and personal growth today!
            </p>
            <button className="bg-primary-color w-fit text-white uppercase font-bold py-2 px-4 rounded hover:bg-light-purple transition duration-200">
              Explore Courses
            </button>
          </div>
          <div className="w-full flex flex-col gap-2">
            <div className="flex flex-col md:flex-row gap-2">
              <img
                className="w-full md:w-1/2 h-48 rounded-lg object-cover shadow-md"
                src="https://img.freepik.com/free-photo/standing-near-whiteboard-business-people-manager-working-their-new-project-classroom_146671-16422.jpg?ga=GA1.1.1152584770.1732648307&semt=ais_hybrid"
                alt="Business people working"
              />
              <img
                className="w-full md:w-64 h-48 rounded-lg object-cover shadow-md"
                src="https://img.freepik.com/premium-photo/young-university-students-tutoring-studying-online-with-video-conference-while-sitting-front-computer-laptop-wooden-working-desk-comfortable-bedroom_35674-2520.jpg?ga=GA1.1.1152584770.1732648307&semt=ais_hybrid"
                alt="Students studying online"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              <img
                className="w-full md:w-64 h-48 rounded-lg object-cover shadow-md"
                src="https://img.freepik.com/premium-photo/education-school-learning-statistics-people-concept-group-students-teacher-with-test-results-classroom-virtual-screens-with-charts_380164-176640.jpg?ga=GA1.1.1152584770.1732648307&semt=ais_hybrid"
                alt="Students and teacher in classroom"
              />
              <img
                className="w-full md:w-1/2 h-48 rounded-lg object-cover shadow-md"
                src="https://img.freepik.com/free-photo/kids-wanting-answer-question-from-their-teacher_23-2148668665.jpg?ga=GA1.1.1152584770.1732648307&semt=ais_hybrid"
                alt="Kids in classroom"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Explore;
