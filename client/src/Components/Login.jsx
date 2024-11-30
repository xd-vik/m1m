import React from "react";
import { Link } from "react-router-dom";
import Picture from '../../public/images/LoginPic.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faLock} from '@fortawesome/free-solid-svg-icons';


function Login() {
  return (
    <>
    <div className="bg-blue-100 h-screen w-screen py-1">
  
      <div className="flex items-center justify-center flex-col md:flex-row bg-blue-50 shadow-lg rounded-lg overflow-hidden max-w-6xl mx-auto sm:my-10 md:my-60 lg:my-20 ">
          <div className="md:w-1/2 p-8 flex items-center justify-center bg-blue-50">
              <img src={Picture} alt="Logo" className="w-full h-auto bg-blue-50" />
          </div>
          <div className="md:w-1/2 w-full md:p-8 px-20 ">
              <h2 className="text-4xl font-bold md:ml-30 ml-32 mb-6">Login</h2>
              <form>
                  <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                          Username
                      </label>
                      <div className="flex items-center border rounded-lg bg-gray-100 p-2">
                      <FontAwesomeIcon className="mr-2" icon={faUser} />
                          <input className="bg-gray-100 appearance-none border-none w-full text-gray-700 leading-tight focus:outline-none" id="username" type="text" placeholder="Enter your Username" />
                      </div>
                  </div>
                  <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                          Password
                      </label>
                      <div className="flex items-center border rounded-lg bg-gray-100 p-2">
                      <FontAwesomeIcon className="mr-2"  icon={faLock} />
                              <input className="bg-gray-100 appearance-none border-none w-full text-gray-700 leading-tight focus:outline-none" id="password" type="password" placeholder="Enter your Password" />
                      </div>
                  </div>
                  <div className="flex items-center justify-between">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full" type="button">
                          Login
                      </button>
                  </div>
                  <div className="flex md:flex-row flex-col justify-between mt-4">
                      <a className="inline-block align-baseline font-bold text-sm text-blue-600 hover:text-blue-800" href="#">
                          Don't have account?
                      </a>
                      <a className="inline-block align-baseline font-bold text-sm text-blue-600 hover:text-blue-800" href="#">
                          Forgot Password?
                      </a>
                  </div>
              </form>
          </div>
      </div>
    </div>
    </>
  );
}
export default Login