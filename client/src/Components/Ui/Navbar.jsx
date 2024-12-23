import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

const Navbar = () => {
  const items = [
    {
      label: "Courses",
      childLinks: [
        {
          label: "Web Development",
        },
        {
          label: "Android Development",
        },
      ],
    },
    {
      label: "Resources",
    },
    {
      label: "About Us",
    },
    {
      label: "Explore",
      link: "/course",
    },
  ];
  return (
    <>
      <nav className="flex w-full p-2 justify-between items-center border-2">
        <div className="flex items-center">
          <img
            className="w-16 mr-8 rounded-full"
            src="./assets/logo.jpg"
            alt=""
            srcset=""
          />
          <span className="text-lg font-bold">SkillSphere</span>
        </div>
        <div>
          <input
            className="p-2 rounded-full border-2"
            type="search"
            name=""
            placeholder="Search..."
            id=""
          />
        </div>
        <div className="flex list-none justify-between ">
          {items?.map((elem) => {
            return (
              <>
                {elem?.label !== "Courses" ? (
                  <Link className="px-5" to={elem?.link}>{elem.label}</Link>
                ) : (
                  <select>
                    <option value="" disabled>
                      Courses
                    </option>
                    {elem?.childLinks?.map((path) => {
                      return <option value={path?.label}>{path?.label}</option>;
                    })}
                  </select>
                )}
              </>
            );
          })}
        </div>
        <div className="px-5 ">
          <button className="px-2.5 mx-2 bg-pure-purple text-white p-2 rounded-full ">
            Login
          </button>
          <button className="px-2.5 mx-2 rounded-full border-gray-400 text-gray-900 border p-2 ">
            Sign Up
          </button>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
