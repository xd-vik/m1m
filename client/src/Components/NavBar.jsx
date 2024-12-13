import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/images/logom1m.jpg';

const Nav = [
  {
    title: "Home",
    route: "/"
  },
  {
    title: "About",
    route: "/about"
  },
  {
    title: "Courses",
    route: "/courses"
  },
  {
    title: "Contact Us",
    route: "/contact"
  }
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full h-[10vh]">
      {/* Main navigation container */}
      <div className="flex justify-between items-center h-full px-6 sm:px-8 md:px-12 lg:px-16">
        {/* Logo */}
        <div className="w-[20%] sm:w-[15%] flex items-center justify-start">
          <img src={logo} alt="Logo" className="h-[40px] sm:h-[50px] object-contain" />
        </div>

        {/* Navigation Links for larger screens */}
        <div className="hidden sm:flex justify-center items-center gap-8 md:gap-10 lg:gap-12 xl:gap-14 w-auto ml-4">
          {Nav.map((data, index) => (
            <Link
              key={index}
              className="text-[1rem] sm:text-[1.2rem] md:text-[1.34rem] font-semibold text-[#122766] hover:text-blue-500 hover:underline hover:underline-offset-8 p-3"
              to={data.route}
            >
              {data.title}
            </Link>
          ))}
        </div>

        {/* Sign-in and Login buttons for larger screens */}
        <div className="hidden sm:flex gap-6 w-auto justify-center ml-4">
          <Link
            to="/SignUp"
            className="px-6 py-2 text-[1rem] sm:text-[1.2rem] md:text-[1.34rem] rounded-lg text-[#015DFE] border-2 border-[#015DFE] font-semibold hover:bg-blue-700 hover:text-white"
          >
            Sign-up
          </Link>
          <Link
            to="/Login"
            className="px-6 py-2 text-[1rem] sm:text-[1.2rem] md:text-[1.34rem] bg-[#015DFE] text-white rounded-lg font-semibold hover:bg-blue-700"
          >
            Login
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="sm:hidden flex items-center justify-center">
          <button onClick={toggleMenu} className="text-[#015DFE] text-2xl">
            <i className={isMenuOpen ? 'ri-close-line' : 'ri-menu-2-line'}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white shadow-lg absolute top-[10vh] left-0 right-0 z-10`}>
        <div className="flex flex-col items-center py-6 gap-4">
          {Nav.map((data, index) => (
            <Link
              key={index}
              className="p-4 text-xl text-[#122766] hover:text-blue-500 hover:underline"
              to={data.route}
              onClick={closeMenu}
            >
              {data.title}
            </Link>
          ))}
          <div className="p-4 flex flex-col gap-4">
            <Link
              to="/SignUp"
              className="block text-[#015DFE] border-2 border-[#015DFE] px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 hover:text-white"
              onClick={closeMenu}
            >
              Sign-up
            </Link>
            <Link
              to="/Login"
              className="block text-white bg-[#015DFE] px-6 py-2 rounded-lg font-semibold hover:bg-blue-700"
              onClick={closeMenu}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;