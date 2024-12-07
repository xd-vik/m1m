import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faLock,faEnvelope} from '@fortawesome/free-solid-svg-icons';


const ContactUs = () => {
  return <Link to="/contact">
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen p-4 bg-blue-100">
                    <div className="p-8 md:w-1/2">
                        <h1 className="text-4xl font-bold text-blue-900 mb-4">Contact Us</h1>
                        <p className="text-lg text-blue-900 mb-4">
                            Email, Call or Complete the form to let us know more about you and to let you know more on how we work
                        </p>
                        <p className="text-lg text-blue-900 mb-2">m1m3232@gmail.com</p>
                        <p className="text-lg text-blue-900 mb-4">918-456-7867</p>
                        <a href="#" className="text-lg text-blue-900 underline mb-8 block">Customer Support</a>
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/2 pr-4">
                                <h2 className="text-lg font-bold text-blue-900 mb-2">Customer Support</h2>
                                <p className="text-lg text-blue-900">
                                    Our support team is available around the clock to address any concerns or queries you may have.
                                </p>
                            </div>
                            <div className="md:w-1/2 pl-4">
                                <h2 className="text-lg font-bold text-blue-900 mb-2">Feedback And Suggestions</h2>
                                <p className="text-lg text-blue-900">
                                    We value your feedback and are continuously working to improve m1m. Your input is crucial in building the future of m1m.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-2xl border-2 border-gray-00 md:w-1/3 mt-8 md:mt-0">
                        <h1 className="text-3xl font-bold text-blue-900 mb-4">Get in Touch</h1>
                        <p className="text-lg text-blue-900 mb-4">You can reach us anytime</p>
                        <form>
                            <div className="flex mb-4">
                                <input type="text" placeholder="First Name" className="w-1/2 p-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                <input type="text" placeholder="Last Name" className="w-1/2 p-2 border border-gray-300 rounded-2xl ml-5 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div className="flex items-center border mb-4 ">
                      <FontAwesomeIcon className="ml-2"  icon={faEnvelope} />
                      <input type="text" placeholder="Email" className="w-full p-2  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      </div>
                            <div className="flex items-center mb-4">
                                <input type="text" placeholder="+91" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div className="mb-4">
                                <textarea placeholder="Tell Us Something...." className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Submit</button>
                        </form>
                    </div>
                </div>
  </Link>;
};

export default ContactUs;