import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex bg-gray-800 py-4 px-6 z-999 absolute w-full top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link
            to={"/"}
            prloading="lazy"
            className="text-2xl cursor-pointer font-sans font-bold text-yellow-500"
          >
            Shri Construction
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-lg font-mono mx-4  ${
              isActive
                ? "text-yellow-500 font-bold"
                : "text-gray-300 hover:text-yellow-500 transition duration-300 ease-in-out"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `text-lg font-mono mx-4  ${
              isActive
                ? "text-yellow-500 font-bold"
                : "text-gray-300 hover:text-yellow-500 transition duration-300 ease-in-out"
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `text-lg font-mono mx-4  ${
              isActive
                ? "text-yellow-500 font-bold"
                : "text-gray-300 hover:text-yellow-500 transition duration-300 ease-in-out"
            }`
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `text-lg font-mono mx-4 hover:text-yellow-500
                  transition duration-300 ease-in-out   ${
                    isActive ? "text-yellow-500 font-bold" : "text-gray-300"
                  }`
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
