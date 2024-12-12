import React from "react";
import about from "../../public/images/about.jpg";
import man from "../../public/images/man.jpg";
import woman from "../../public/images/woman.webp";

const aboutData = [
  {
    title: "Everyday Complete Worksheet",
    description: "We create understanding and engagement among our students, enhancing comprehension.",
  },
  {
    title: "Online Group Discussions",
    description: "Individual involvement and teamwork engagement are key components.",
  },
  {
    title: "Learning Outcome",
    description: "Performance is showcased using statistics to understand individual improvement.",
  },
];

const AboutUs = () => {
  return (
    <div className="w-full">

      <div className="w-full h-[50vh] sm:h-[60vh]">
        <img
          src={about}
          alt="About Us Background"
          className="w-full h-full object-cover"
        />
      </div>


      <div className="text-center py-8 px-6 sm:px-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#122766]">
          About Us
        </h1>
      </div>

  
      <div className="px-6 sm:px-12 md:px-16 lg:px-24 py-8">
        <p className="text-base sm:text-lg lg:text-xl text-[#333] mb-6 leading-relaxed">
          Welcome to Mission One Million, where learning is not just about
          gaining knowledge—it's about ensuring you succeed and invest in
          yourself without risk. Our unique approach combines the power of
          education with a commitment to your success.
        </p>
        <p className="text-base sm:text-lg lg:text-xl text-[#333] leading-relaxed">
          At Mission One Million, we offer a wide range of expert-led courses
          designed to help you acquire new skills, boost your career, or pursue
          a personal passion. What sets us apart is our belief in making
          learning truly rewarding.
        </p>
      </div>

   
      <div className="flex flex-col lg:flex-row items-center lg:justify-between px-6 sm:px-12 md:px-16 lg:px-24 py-16">

        <div className="w-full lg:w-[60%] mb-8 lg:mb-0">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#122766] mb-6">
            Interactive Teaching on Our Online Platforms
          </h3>
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-[60%] h-[300px] sm:h-[400px]">
              <img
                src={man}
                alt="Man teaching online"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative w-[50%] h-[250px] sm:h-[300px] lg:h-[350px] lg:-ml-20 -rotate-6">
              <img
                src={woman}
                alt="Woman learning online"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

   
        <div className="w-full lg:w-[40%]">
          {aboutData.map((data, index) => (
            <div key={index} className="mb-8">
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#122766] flex items-center">
                <i className="ri-checkbox-circle-line text-2xl sm:text-3xl lg:text-4xl text-blue-500 mr-2"></i>
                {data.title}
              </h4>
              <p className="text-base sm:text-lg lg:text-xl text-[#333] mt-2 leading-relaxed">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
