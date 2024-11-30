import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../public/images/logom1m.jpg'

const NavBar=()=>{
    return(
    <nav className='h-[10vh] w-full'>
        <div className='flex'>
          <div className='w-[20%] h-full'>
            <img src={logo} alt="" className='w-[13vh] h-[10vh]'/>
          </div>
          <div className='flex justify-center items-center text-[1.34rem] font-semibold text-[#122766] gap-10 w-[50%] h-[10vh]'>
            <Link className='p-5 m-2' to='/'>Home</Link>
            <Link className='p-5 m-2'to='/about'>About</Link>
            <Link className='p-5 m-2' to='/courses'>Courses</Link>
            <Link className='p-5 m-2'to='/contact'>Contact Us</Link>
          </div>
          <div className='w-[20%] flex justify-center items-center gap-10 h-[10vh]'>
            <Link to='/SignUp' className='px-5 py-2 rounded-lg text-[1.34rem] text-[#015DFE] border-2 border-[#015DFE] font-semibold hover:bg-blue-700 hover:text-white'>Sign-in</Link>
            <Link to='/Login' className='px-5 py-2 text-[1.34rem] bg-[#015DFE] text-white rounded-lg font-semibold hover:bg-blue-700'>Login</Link>
          </div>
        </div>
      </nav>
      )}

      export default NavBar;

