import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { FaClock, FaIndianRupeeSign } from "react-icons/fa6";

const Card = ({ title, image, price, duration, category , item }) => {
  const cardRef = useRef();
  const contentRef = useRef();

  const handleEnterMouse = () => {
    gsap.to(cardRef.current, {
      duration: 0.5,
      scale: 1.05, // Slightly enlarge the card
      rotateY: 10, // Add a subtle tilt
      rotateX: -10,
      boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.2)", // Glowing shadow
      ease: "power2.out",
    });
  };

  const handleEnterMouseOut = () => {
    gsap.to(cardRef.current, {
      duration: 0.5,
      scale: 1, // Reset scale
      rotateY: 0,
      rotateX: 0,
      boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)", // Reset shadow
      ease: "power2.out",
    });
  };

  useEffect(() => {
    // Animate card content on mount
    gsap.from(contentRef.current.children, {
      duration: 1,
      opacity: 0,
      y: 20,
      stagger: 0.2, // Staggered reveal
      ease: "power2.out",
    });
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleEnterMouse}
      onMouseLeave={handleEnterMouseOut}
      className="flex flex-col w-72 m-2 space-y-4 rounded-b cursor-pointer transition-all  shadow-xl"
      style={{
        perspective: "1000px", // Perspective for 3D effect
        transformStyle: "preserve-3d",
      }}
    >
      <img className="h-36 p-3 object-cover rounded" src={image} alt="" />
      <div ref={contentRef} className="p-2">
        <h2 className="text-gray-700 font-semibold text-xs">{category}</h2>
        <h1 className="text-sm text-secondary-color py-2 font-bold">{title}</h1>
        <div className="flex py-2 justify-evenly">
          <div className="flex items-center">
            <FaIndianRupeeSign className="mx-1 text-primary-color" />
            <span>{price}</span>
          </div>
          <div className="flex items-center">
            <FaClock className="mx-1 text-primary-color" />
            <span>{duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
