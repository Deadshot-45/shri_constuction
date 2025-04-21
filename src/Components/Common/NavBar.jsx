import React from "react";
import { FaBars } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="flex bg-gray-800 py-4 px-6 z-50 relative w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link
            to={"/"}
            className="text-2xl max-sm:text-xl cursor-pointer font-sans font-bold text-yellow-500"
          >
            Shri Construction
          </Link>
        </div>
        <div className="max-xs:hidden flex justify-center space-x-10 max-sm:space-x-3 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-lg max-md:text-[16px] font-mono  transition duration-300 ease-in-out ${
                  isActive
                    ? "text-yellow-500 font-bold"
                    : "text-gray-300 hover:text-yellow-500"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        <button
          onClick={toggleMenu}
          className="text-gray-300 text-xl hover:text-yellow-500 transition duration-300 ease-in-out max-xs:flex hidden"
        >
          <FaBars />
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-15 left-0 max-xs:flex flex-col space-y-4 p-6 bg-gray-800 z-50 w-full">
          {navLinks.map((link) => (
            <NavLink
              onClick={toggleMenu}
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-lg font-mono mx-0 ${
                  isActive
                    ? "text-yellow-500 font-bold"
                    : "text-gray-300 hover:text-yellow-500 transition duration-300 ease-in-out"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;