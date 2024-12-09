<<<<<<< Updated upstream
import React, { useEffect } from 'react';
import { Link, Route, useNavigate } from 'react-router-dom';
import {ToastContainer} from 'react-toastify'
import {handleError, handleSuccess} from '../features/toast/utils'
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/images/logom1m.jpg';
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
]
const NavBar=()=>{
  const navigate = useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('loggedInUser')
    handleSuccess("logout successfully ")
    navigate('/')
  }

  const user = localStorage.getItem('loggedInUser')
    return(
    <nav className='h-[10vh] w-full'>
        <div className='flex'>
          <div className='w-[20%] h-full'>
            <img src="/images/logom1m.jpg" alt="" className='w-[13vh] h-[10vh]'/>
          </div>
          <div className='flex justify-center items-center text-[1.34rem] font-semibold text-[#122766] gap-10 w-[50%] h-[10vh]'>
            {Nav.map((data,index)=>{
              return(
                <Link className='p-5 m-2' to={data.route}>
                <h1 className='hover:text-blue-500 hover:underline hover:underline-offset-8'>{data.title}</h1>
                </Link>
              )
            })}
          </div>
          <div className='w-[20%] flex justify-center items-center gap-10 h-[10vh]'>
          
          { user ? ( <> <button onClick={handleLogout} className='px-5 py-2 rounded-lg text-[1.34rem] text-[#015DFE] border-2 border-[#015DFE] font-semibold hover:bg-blue-700 hover:text-white'>Logout</button>
                        <h3>{user}</h3>
             </> ) : ( <> <button onClick={()=>{
              navigate('/signup')
            }} className='px-5 py-2 rounded-lg text-[1.34rem] text-[#015DFE] border-2 border-[#015DFE] font-semibold hover:bg-blue-700 hover:text-white'>Sign-Up</button>
            <Link to='/Login' className='px-5 py-2 text-[1.34rem] bg-[#015DFE] text-white rounded-lg font-semibold hover:bg-blue-700'>Login</Link> </> )
              }
              <ToastContainer/>
=======
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full h-[10vh]">
      {/* Main navigation container */}
      <div className="flex justify-between items-center h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Logo */}
        <div className="w-[20%] sm:w-[20%] h-auto flex justify-center">
          <img src={logo} alt="Logo" className="h-[40px] sm:h-[50px] object-contain" />
        </div>

        {/* Navigation Links for screen sizes 641px to 1007px */}
        <div className="hidden sm:flex justify-center items-center gap-6 md:gap-8 lg:gap-10 xl:gap-12 w-auto">
          {Nav.map((data, index) => (
            <Link key={index} className="text-[1rem] sm:text-[1.2rem] md:text-[1.34rem] font-semibold text-[#122766] hover:text-blue-500 hover:underline hover:underline-offset-8 p-5" to={data.route}>
              {data.title}
            </Link>
          ))}
        </div>

        {/* Sign-in and Login buttons for screen sizes 641px to 1007px */}
        <div className="hidden sm:flex gap-4 w-auto justify-center">
          <Link to="/SignUp" className="px-5 py-2 text-[1rem] sm:text-[1.2rem] md:text-[1.34rem] rounded-lg text-[#015DFE] border-2 border-[#015DFE] font-semibold hover:bg-blue-700 hover:text-white">
            Sign-up
          </Link>
          <Link to="/Login" className="px-5 py-2 text-[1rem] sm:text-[1.2rem] md:text-[1.34rem] bg-[#015DFE] text-white rounded-lg font-semibold hover:bg-blue-700">
            Login
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="sm:hidden flex items-center justify-center">
          <button onClick={toggleMenu} className="text-[#015DFE] text-2xl">
            <i className={`ri-menu-2-line ${isMenuOpen ? 'hidden' : 'block'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white shadow-lg absolute top-[10vh] left-0 right-0 z-10`}>
        <div className="flex flex-col items-center py-4">
          {Nav.map((data, index) => (
            <Link key={index} className="p-4 text-xl text-[#122766] hover:text-blue-500 hover:underline" to={data.route}>
              {data.title}
            </Link>
          ))}
          <div className="p-4">
            <Link to="/SignUp" className="block text-[#015DFE] border-2 border-[#015DFE] px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 hover:text-white mb-4">
              Sign-up
            </Link>
            <Link to="/Login" className="block text-white bg-[#015DFE] px-4 py-2 rounded-lg font-semibold hover:bg-blue-700">
              Login
            </Link>
>>>>>>> Stashed changes
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
