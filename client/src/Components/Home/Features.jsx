import React from "react";
import Container from "../Ui/Container";

const Features = () => {
  const featuresData = [
    {
      logo: <i className="fa-solid fa-chalkboard-user"></i>,
      title: "Expert Instructor",
      desc: "Our team of expert instructors brings a wealth of knowledge and experience to the classroom, ensuring that you receive the best possible education.",
    },
    {
      logo: <i className="fa-solid fa-users"></i>,
      title: "Collaborative Learning",
      desc: "Engage with fellow students through collaborative projects and discussions, fostering a community of learning and support.",
    },
    {
      logo: <i className="fa-solid fa-clock"></i>,
      title: "Flexible Scheduling",
      desc: "Our courses are designed to fit your busy lifestyle, offering flexible scheduling options that allow you to learn at your own pace.",
    },
    {
      logo: <i className="fa-solid fa-certificate"></i>,
      title: "Certification Opportunities",
      desc: "Earn recognized certifications upon course completion, enhancing your resume and showcasing your skills to potential employers.",
    },
  ];

  return (
    <Container className={"bg-gray-100"}>
      <h1 className="md:text-4xl text-xl text-seconday-color font-bold text-center">
        Why Choose{" "}
        <span className="text-primary-color font-extrabold">SkillSphere ?</span>
      </h1>
      <div className="flex items-center md:py-10 sm:py-6">
        {featuresData.map((elem, index) => {
          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md m-4  p-5 text-center transition-transform transform hover:scale-105"
            >
              <div className="text-4xl text-primary-color mb-4">
                {elem.logo}
              </div>
              <h2 className="text-xl font-bold text-seconday-color mb-2">
                {elem.title}
              </h2>
              <p className="text-gray-700 font-semibold text-sm">{elem.desc}</p>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Features;
