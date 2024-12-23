import React from "react";
import Container from "../Ui/Container";
import { Carousel } from "antd";
const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      testimonial:
        "This service has changed my life for the better! Highly recommend it.",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      testimonial:
        "Amazing experience! The team was very supportive and helpful.",
    },
    {
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      testimonial:
        "I couldn't be happier with the results. Truly a fantastic service!",
    },
    {
      name: "Bob Brown",
      email: "bob.brown@example.com",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      testimonial: "A game changer! I saw results in no time at all.",
    },
    {
      name: "Charlie Davis",
      email: "charlie.davis@example.com",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      testimonial:
        "The best decision I ever made. Highly recommend to everyone!",
    },
    {
      name: "Emily Wilson",
      email: "emily.wilson@example.com",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      testimonial: "Fantastic service! I felt supported every step of the way.",
    },
    {
      name: "David Miller",
      email: "david.miller@example.com",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
      testimonial:
        "Incredible experience! I learned so much and made great progress.",
    },
    {
      name: "Sophia Taylor",
      email: "sophia.taylor@example.com",
      image: "https://randomuser.me/api/portraits/women/8.jpg",
      testimonial:
        "I highly recommend this service! It exceeded my expectations.",
    },
    {
      name: "Michael Anderson",
      email: "michael.anderson@example.com",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
      testimonial:
        "A wonderful experience! The staff was friendly and knowledgeable.",
    },
    {
      name: "Olivia Thomas",
      email: "olivia.thomas@example.com",
      image: "https://randomuser.me/api/portraits/women/10.jpg",
      testimonial:
        "I am so grateful for this service! It has made a huge difference in my life.",
    },
  ];
  return (
    <>
      <Container>
        <h1 className="text-seconday-color  text-center font-bold text-4xl">
          What our clients ,{" "}
          <span className="text-primary-color font-extrabold">
            say about us!
          </span>
        </h1>
        <div className="">
          <Carousel
            arrows={true}
            dotPosition="bottom"
            className="flex justify-between items-center"
            slidesToShow={3}
            // autoplay
          >
            {testimonials?.map((elem, index) => {
              return (
                // <div className="">
                  <div
                    key={index}
                    className="shadow-lg my-10  text-center border-2  h-40 rounded   flex  justify-center items-center  w-auto p-4 cursor-pointer "
                  >
                    <img
                      className="w-16 rounded-full  -mt-12 mx-auto"
                      src={elem.image}
                      alt=""
                    />
                    <h2 className="text-seconday-color  py-1 font-semibold text-lg">
                      {elem.name}
                    </h2>
                    <p className="text-sm text-gray-700 py-1 font-semibold">
                      {elem.email}
                    </p>
                    <p className="text-gray-800 font-medium py-1 text-sm text-center">
                      {elem.testimonial}
                    </p>
                  </div>
                // </div>
              );
            })}
          </Carousel>
        </div>
      </Container>
    </>
  );
};

export default Testimonials;
