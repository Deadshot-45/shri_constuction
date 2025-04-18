import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex bg-gray-800 py-4 px-6 z-999 absolute w-full top-0">    
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-sans font-bold text-yellow-500">
            Shri Construction
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Link
          to="/"
          className="text-white text-lg font-mono mx-4 hover:text-yellow-500
                transition duration-300 ease-in-out"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-white text-lg font-mono mx-4 hover:text-yellow-500
                transition duration-300 ease-in-out"
        >
          About
        </Link>
        <Link
          to="/projects"
          className="text-white text-lg font-mono mx-4 hover:text-yellow-500
            transition duration-300 ease-in-out"
        >
          Projects
        </Link>
        <Link
            to="/contact"
            className="text-white text-lg font-mono mx-4 hover:text-yellow-500
                transition duration-300 ease-in-out"
        >
            Contact
        </Link>

      </div>
    </nav>
  );
};

export default NavBar;
