import React from "react";
import facebook from "../../public/images/facebook.png";
import twitter from "../../public/images/twitter.png";
import linkedin from "../../public/images/linkedin.png";
import instagram from "../../public/images/logo4.png";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Join Our Community Section */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-semibold mb-4">Join Our Community</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter Email"
              className="px-4 py-2 rounded-l-md focus:outline-none text-black w-60"
            />
            <button className="bg-white text-blue-900 font-semibold px-4 py-2 rounded-r-md hover:bg-gray-200">
              Submit
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li>New Courses</li>
              <li>Home</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Learn More</h4>
            <ul className="space-y-2">
              <li>Skill Platform</li>
              <li>Mentors</li>
              <li>Management Skills</li>
              <li>Categories</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-500 mt-6 pt-4 ml-10 mr-40">
        <div className="flex justify-between items-center">
          <p className="text-xl">
            Design by m1m 2024. All rights reserved
          </p>
          <a href="/privacy-policy" className="text-xl hover:underline mr-40">
            Privacy Policy
          </a>
          <div className="flex space-x-6 mr-20">
            <a href="#" className="hover:scale-110 transition-transform">
              <img
                src={twitter}
                alt="Twitter"
                className="w-10 h-10"
              />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <img
                src={facebook}
                alt="Facebook"
                className="w-10 h-10"
              />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <img
                src={instagram}
                alt="Instagram"
                className="w-10 h-10"
              />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <img
                src={linkedin}
                alt="LinkedIn"
                className="w-10 h-10"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
