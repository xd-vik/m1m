import React from "react";


const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8 px-4  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Join Our Community Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Join Our Community</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter Email"
                className="px-4 py-2 rounded-l-md focus:outline-none text-black w-full md:w-60"
              />
              <button className="bg-white text-blue-900 font-semibold px-4 py-2 rounded-r-md hover:bg-gray-200">
                Submit
              </button>
            </div>
          </div>

          {/* Navigation Links */}
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

        <div className="border-t border-gray-500 mt-6 pt-4 flex justify-between items-center">
          <p className="text-xl">
            Design by m1m 2024. All rights reserved
          </p>
          <a href="/privacy-policy" className="text-xl hover:underline mr-4 md:mr-8">
            Privacy Policy
          </a>
          <div className="flex space-x-4">
            <a href="#" className="hover:scale-110 transition-transform">
              <img
                src="/images/twitter.png"
                alt="Twitter"
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <img
                src="/images/facebook.png"
                alt="Facebook"
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <img
                src="/images/logo4.png"
                alt="Instagram"
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <img
                src="/images/linkedin.png"
                alt="LinkedIn"
                className="w-8 h-8 md:w-10 md:h-10"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;