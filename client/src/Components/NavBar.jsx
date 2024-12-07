import React, { useEffect } from 'react';
import { Link, Route, useNavigate } from 'react-router-dom';
import logo from '../../public/images/logom1m.jpg'
import {ToastContainer} from 'react-toastify'
import {handleError, handleSuccess} from '../features/toast/utils'


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
          
          { user ? ( <> <button onClick={handleLogout} className='px-5 py-2 rounded-lg text-[1.34rem] text-[#015DFE] border-2 border-[#015DFE] font-semibold hover:bg-blue-700 hover:text-white'>Logout</button>
                        <h3>{user}</h3>
             </> ) : ( <> <button onClick={()=>{
              navigate('/signup')
            }} className='px-5 py-2 rounded-lg text-[1.34rem] text-[#015DFE] border-2 border-[#015DFE] font-semibold hover:bg-blue-700 hover:text-white'>Sign-Up</button>
            <Link to='/Login' className='px-5 py-2 text-[1.34rem] bg-[#015DFE] text-white rounded-lg font-semibold hover:bg-blue-700'>Login</Link> </> )
              }
              <ToastContainer/>
          </div>
        </div>
      </nav>
      )}

      export default NavBar;

