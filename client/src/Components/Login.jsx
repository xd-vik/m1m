import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Picture from '/images/LoginPic.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faLock} from '@fortawesome/free-solid-svg-icons';
import { ToastContainer } from "react-toastify";
import {handleSuccess, handleError} from '../features/toast/utils'

const Login = ()=>{
    const navigate = useNavigate();
    const [loginInfo, setLoginInfo] = useState({
        email:'',
        password:''
    });
// function Login() {
    const handleChange = (e) =>{
        const {name, value } = e.target;
        setLoginInfo((prev)=>({
            ...prev,
            [name]: value
        }));
    };

    const handleLogin =  async (e)=>{
        e.preventDefault();
        const {email,password} = loginInfo; 

        if (!email || !password){
            return handleError('Al fields are required');
        }

        try {
            const url = "https://m1m-server.vercel.app/auth/login";
          const response = await fetch(url, {
              method: "POST",
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(loginInfo) // Corrected here to use loginInfo
          });
            const result =await response.json();
            const {success,message,jwtToken, name}=result;
            if (success){
                handleSuccess(message);
                localStorage.setItem('token',jwtToken);
                localStorage.setItem('loggedInUser',name)
                setTimeout(()=>{
                    navigate('/');
                }, 1000);
            }else{
                handleError(message || 'Login failed'); 

            }
        }catch(err){
            handleError('An error occurred.please try again.');

        }
    };
  return (
    <>
    <div className="bg-blue-100 h-screen w-screen py-1">
  
      <div className="flex items-center justify-center flex-col md:flex-row bg-blue-50 shadow-lg rounded-lg overflow-hidden max-w-6xl mx-auto sm:my-10 md:my-60 lg:my-20 ">
          <div className="md:w-1/2 p-8 flex items-center justify-center bg-blue-50">
              <img src={Picture} alt="Logo" className="w-full h-auto bg-blue-50" />
          </div>
          <div className="md:w-1/2 w-full md:p-8 px-20 ">
              <h2 className="text-4xl font-bold md:ml-30 ml-32 mb-6">Login</h2>
              <form onSubmit={handleLogin}>
                  <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                          Username
                      </label>
                      <div className="flex items-center border rounded-lg bg-gray-100 p-2">
                      <FontAwesomeIcon className="mr-2" icon={faUser} />
                          <input 
                          onChange={handleChange}
                          id="email"
                          type="email"
                          name="email"
                          value={loginInfo.email}
                          required
                          className="bg-gray-100 appearance-none border-none w-full text-gray-700 leading-tight focus:outline-none"  placeholder="Enter your Username" />
                      </div>
                  </div>
                  <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                          Password
                      </label>
                      <div className="flex items-center border rounded-lg bg-gray-100 p-2">
                      <FontAwesomeIcon className="mr-2"  icon={faLock} />
                              <input
                              onChange={handleChange}
                              required
                              name="password"
                              id="password"
                              value={loginInfo.password} 
                              className="bg-gray-100 appearance-none border-none w-full text-gray-700 leading-tight focus:outline-none"  type="password" placeholder="Enter your Password" />
                      </div>
                  </div>
                  <div className="flex items-center justify-between">
                      <button 
                      type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full">
                          Login
                      </button>
                  </div>
                  <div className="flex md:flex-row flex-col justify-between mt-4">
                      <a onClick={()=>{
                        navigate('/signup')
                      }} className="inline-block align-baseline cursor-pointer font-bold text-sm text-blue-600 hover:text-blue-800 " type="button">
                          Don't have account?
                      </a>
                      <a onClick={()=>{
                        navigate('/signup')
                      }} className="inline-block align-baseline font-bold text-sm text-blue-600 hover:text-blue-800">
                      Forgot Password?
                      </a>
                  </div>
              </form>
          </div>
      </div>
      <ToastContainer/>
    </div>
    </>
  );
}
export default Login