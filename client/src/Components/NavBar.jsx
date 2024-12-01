import React from 'react';
import { Link, Route } from 'react-router-dom';
import logo from '../../public/images/logom1m.jpg'


const Nav=[
  {
    title:"Home",
    route:"/"
  },
  {
    title:"About",
    route:"/about"
  },
  {
    title:"Courses",
    route:"/courses"
  },
  {
    title:"Contact Us",
    route:"/contact"
  }
]
const NavBar=()=>{
    return(
    <nav className='h-[10vh] w-full'>
        <div className='flex'>
          <div className='w-[20%] h-full'>
            <img src={logo} alt="" className='w-[13vh] h-[10vh]'/>
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
            <Link to='/SignUp' className='px-5 py-2 rounded-lg text-[1.34rem] text-[#015DFE] border-2 border-[#015DFE] font-semibold hover:bg-blue-700 hover:text-white'>Sign-in</Link>
            <Link to='/Login' className='px-5 py-2 text-[1.34rem] bg-[#015DFE] text-white rounded-lg font-semibold hover:bg-blue-700'>Login</Link>
          </div>
        </div>
      </nav>
      )}

      export default NavBar;

