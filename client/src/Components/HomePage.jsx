import React from 'react'
import logo from '../../public/images/logom1m.jpg'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='min-h-screen w-full'>
      <nav className='h-[10vh] w-full'>
        <div className='flex'>
          <div className='w-[20%] h-full'>
            <img src={logo} alt="" className='w-[13vh] h-[10vh] m-2'/>
          </div>
          <div className='flex justify-center items-center text-[1.34rem] font-semibold text-[#122766] gap-10 w-[50%] h-[10vh]'>
            <Link className='p-5 m-2'>Home</Link>
            <Link className='p-5 m-2'>About</Link>
            <Link className='p-5 m-2'>Courses</Link>
            <Link className='p-5 m-2'>Contact Us</Link>
          </div>
          <div className='w-[20%] flex justify-center items-center gap-10 h-[10vh]'>
            <Link className='px-5 py-2 rounded-lg text-[1.34rem] text-[#015DFE] border-2 border-[#015DFE] font-semibold'>Sign-in</Link>
            <Link className='px-5 py-2 text-[1.34rem] bg-[#015DFE] text-white rounded-lg font-semibold'>Login</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default HomePage