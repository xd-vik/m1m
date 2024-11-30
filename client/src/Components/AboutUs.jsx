import React from "react";
import about from "../../public/images/about.jpg";

const AboutUs = () => {
  return (
    <>
    <div className='min-h-screen flex flex-col items-center justify-center w-full'>
      <div className='bg-red-300 w-full h-[60vh]'>
        <img src={about} alt="" className="h-full w-full object-cover"/>
      </div>
      <div className="h-[35vh] w-[90vw] m-2">
        <h1 className='text-[3.5em] font-semibold text-[#122766]'>About Us</h1>
        <p className='text-[1em] pt-2 w-[80%]'>Welcome to Mission One million, where learning is not just about gaining knowledge—it's about ensuring you succeed and invest in yourself without the risk. Our unique approach combines the power of education with a commitment to your success. Here's how it works:</p>
        <p className='text-[1em] pt-2 w-[80%]'>At Mission One million, we offer a wide range of expert-led courses designed to help you acquire new skills, boost your career, or pursue a personal passion. What sets us apart is our belief in making learning truly rewarding. When you enroll in one of our courses, you're not just paying for a chance to learn—you’re investing in your future.</p>
      </div>
    </div>
    </>
  )  // Link component to navigate to '/about' route
};

export default AboutUs;
