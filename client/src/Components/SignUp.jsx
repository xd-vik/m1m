import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faLock,faEnvelope} from '@fortawesome/free-solid-svg-icons';

import { handleError, handleSuccess } from "../features/toast/utils";
import { ToastContainer } from "react-toastify";

function SignUp() {

        const navigate = useNavigate();

        const [signupInfo,setSignupInfo] = useState({
            name: '',
            email:'',
            password:''
        });

        const handleChange = (e)=>{
            const {name,value} = e.target;
            setSignupInfo((prev) =>({
                ...prev,
                [name]:value
            }));
        };

        const handleSignup = async (e) =>{
            e.preventDefault();
            const { name, email, password } = signupInfo;
    
            if (!name || !email || !password) {
                return handleError('All fields are required');
            }
    
            try{
                const url = "https://m1m-server.vercel.app/auth/signup";
                const response = await fetch(url,{
                    method: "POST",
                    headers:{
                        'content-type':"application/json"
                    },
                    body:JSON.stringify(signupInfo)
                });
                const result = await response.json()
                const {success,message,jwtToken}=result;
                if(success){
                    handleSuccess(message);
                    localStorage.setItem('token',jwtToken);
                    localStorage.setItem('loggedInUser',name)
                    setTimeout(()=>{
                        navigate('/');
                    }, 1000);

                    // setTimeout(()=>{
                    //     navigate('/');
                    // },1000)
                } else {
                    handleError(message || 'signup failed');
                }
            }
            catch(err){
                handleError("An error occured . Please try later")
            }
        };

  return (
    <>
     <div className="bg-blue-100 h-screen w-screen py-1">
      <div className="bg-blue-50 p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start max-w-5xl mx-auto sm:my-20 md:my-60 lg:my-40">
          <div className="mb-8 md:mb-0 md:mr-8">
              <img src="/images/SignUp1.png" alt="desk" className="w-full h-auto rounded-lg mt-[10%]" />
          </div>
          <div className="w-full max-w-md">
              <h2 className="text-3xl font-bold mb-6 md:ml-30 ml-32">Signup</h2>
              <form onSubmit={handleSignup} >
                  <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                          Full Name
                      </label>
                      <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <FontAwesomeIcon icon={faUser} />
                          </span>
                          <input 
                          name="name"
                          onChange={handleChange}
                           className="shadow appearance-none border rounded-xl w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your Full name" />
                      </div>
                  </div>
                  <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                          Email
                      </label>
                      <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <FontAwesomeIcon icon={faEnvelope} />
                           
                          </span>
                          <input
                          name="email"
                          onChange={handleChange} 
                           className="shadow appearance-none border rounded-xl w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your Email" />
                      </div>
                  </div>
                  <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                          Password
                      </label>
                      <div className="relative">
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pb-2">
                          <FontAwesomeIcon icon={faLock} />
                          </span>
                          <input 
                          name="password"
                          onChange={handleChange}
                          className="shadow appearance-none border rounded-xl w-full py-2 px-3 pl-10 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter your Password" />
                      </div>
                  </div>
                  <div className="flex items-center justify-between">
                      <button className="bg-blue-500 w-full rounded-2xl hover:bg-blue-700 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline" type="submit">
                          Signup
                      </button>
                      <ToastContainer/>
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