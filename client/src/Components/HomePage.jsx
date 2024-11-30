import React from 'react'
import logo from '../../public/images/logom1m.jpg'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='min-h-screen w-full font-alexandria'>
      <nav className='h-[10vh] w-full'>
        <div className='flex'>
          <div className='w-[20%] h-full'>
            <img src={logo} alt="" className='w-[13vh] h-[10vh]'/>
          </div>
          <div className='flex justify-center items-center text-[1.34rem] font-semibold text-[#122766] gap-10 w-[50%] h-[10vh]'>
            <Link className='p-5 m-2'>Home</Link>
            <Link className='p-5 m-2'>About</Link>
            <Link className='p-5 m-2'>Courses</Link>
            <Link className='p-5 m-2'>Contact Us</Link>
          </div>
          <div className='w-[20%] flex justify-center items-center gap-10 h-[10vh]'>
            <Link className='px-5 py-2 rounded-lg text-[1.34rem] text-[#015DFE] border-2 border-[#015DFE] font-semibold hover:bg-blue-700 hover:text-white'>Sign-in</Link>
            <Link className='px-5 py-2 text-[1.34rem] bg-[#015DFE] text-white rounded-lg font-semibold hover:bg-blue-700'>Login</Link>
          </div>
        </div>
      </nav>

      <div className='w-full h-[90vh] flex'>
        <div className='h-full w-[65%] flex items-center justify-center'>
          <div className='w-[60vw] h-[70vh]'>
            <h1 className='text-[3.5em] font-semibold text-[#122766] '>Mission One <br></br> Million:Empowering Growth and Learning</h1>
            <p className='text-[1.2em] pt-2'>Mission One Million offers a comprehensive suite of tools and resources that deliver a dynamic and engaging learning experience.</p>
            <div className='my-5'>
              <form action="">
                <input type='email' placeholder='Enter Email' name='email' className='px-8 border-2 outline-none border-[#015DFE] py-2 rounded-lg text-[1.34rem]'></input>
                <button className='px-5 py-2 rounded-lg hover:bg-blue-800 text-[1.34rem] bg-[#015DFE] text-white border-2 border-[#015DFE] font-semibold'>Trial</button>
              </form>
              <button className='px-5 py-2 mt-8 rounded-lg hover:bg-blue-800 text-[1.34rem] bg-[#015DFE] text-white border-2 border-[#015DFE] font-semibold'>Explore</button>
            </div>
          </div>
        </div>
        <div className='relative h-full w-[35%] overflow-hidden'>
          <div className='absolute bg-[#122766] h-[50vh] w-[50vh] rounded-[50%] left-[60%] top-[25%]'>
            <h1 className='absolute text-[2.3em] font-semibold text-white left-[15%] top-[33%]'>Our<br></br> Mission</h1>
            <div className='absolute h-[20vh] w-[20vh] rounded-[50%] bg-white -top-[40%] border-[#122766] border-2'>
              <h1 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[1.5rem] text-[#122766]">Empower</h1>
            </div>
            <div className='absolute h-[20vh] w-[20vh] rounded-[50%] bg-white bottom-[20vh] -left-[50%] border-[#122766] border-2'>
              <h1 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[1.5rem] text-[#122766]">Engage</h1>
            </div>
            <div className='absolute h-[20vh] w-[20vh] rounded-[50%] bg-white -bottom-[15vh] -left-[8vh] border-[#122766] border-2'>
              <h1 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[1.5rem] text-[#122766]">Enable</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage