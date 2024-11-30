import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faLock,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import Sign from '../../public/images/SignUp1.png'

function SignUp() {
  return (
    <>
     <div className="bg-blue-100 h-screen w-screen py-1">
      <div className="bg-blue-50 p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start max-w-5xl mx-auto sm:my-20 md:my-60 lg:my-40">
          <div className="mb-8 md:mb-0 md:mr-8">
              <img src={Sign} alt="desk" className="w-full h-auto rounded-lg mt-[10%]" />
          </div>
          <div className="w-full max-w-md">
              <h2 className="text-3xl font-bold mb-6 md:ml-30 ml-32">Signup</h2>
              <form>
                  <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" for="fullName">
                          Full Name
                      </label>
                      <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <FontAwesomeIcon icon={faUser} />
                          </span>
                          <input className="shadow appearance-none border rounded-xl w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fullName" type="text" placeholder="Enter your Full name" />
                      </div>
                  </div>
                  <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                          Email
                      </label>
                      <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <FontAwesomeIcon icon={faEnvelope} />
                           
                          </span>
                          <input className="shadow appearance-none border rounded-xl w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your Email" />
                      </div>
                  </div>
                  <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                          Password
                      </label>
                      <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pb-2">
                          <FontAwesomeIcon icon={faLock} />
                          </span>
                          <input className="shadow appearance-none border rounded-xl w-full py-2 px-3 pl-10 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your Password" />
                      </div>
                  </div>
                  <div className="flex items-center justify-between">
                      <button className="bg-blue-500 w-full rounded-2xl hover:bg-blue-700 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline" type="button">
                          Signup
                      </button>
                  </div>
              </form>
              <p className="mt-4 text-center text-gray-600">
                  Already have an account? <a href="#" className="text-blue-500">Signin</a>
                
              </p>
          </div>
      </div>
      </div>
      </>
  );
}

export default SignUp;
