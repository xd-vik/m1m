import React from "react";
const aboutData=[
  {
   title:"Everyday complete worksheet",
   description:"We create understand engagement among our student and comprehension"
  },
  {
    title:"Online Group Discussions",
    description:"Individual involvement and the engagement with the team"
   },
   {
    title:"Learning Outcome",
    description:"Performance of the individual is showcased helping understand improvement using statistics"
   }
]
const AboutUs = () => {
  return (
    <>
    <div className='min-h-screen flex flex-col items-center justify-center w-full'>
      <div className='bg-red-300 w-full h-[60vh]'>
        <img src="/images/about.jpg" alt="About" className="h-full w-full object-cover"/>
      </div>
      <div className="h-[40vh] w-[90vw] m-2">
        <h1 className='text-[3.5em] font-semibold text-[#122766]'>About Us</h1>
        <p className='text-[1em] pt-2 w-[80%]'>Welcome to Mission One million, where learning is not just about gaining knowledge—it's about ensuring you succeed and invest in yourself without the risk. Our unique approach combines the power of education with a commitment to your success. Here's how it works:</p>
        <p className='text-[1em] pt-2 w-[80%]'>At Mission One million, we offer a wide range of expert-led courses designed to help you acquire new skills, boost your career, or pursue a personal passion. What sets us apart is our belief in making learning truly rewarding. When you enroll in one of our courses, you're not just paying for a chance to learn—you’re investing in your future.</p>
      </div>
      <div className="min-h-screen w-full flex">
        <div className="w-[60vw] h-[100vh] flex flex-col items-center">
          <h1 className='text-[3em] w-[40vw] font-semibold text-[#122766] m-6'>Interactive teaching our<br></br> online platforms</h1>
          <div className="relative flex items-center justify-center w-[80%] h-[50vh]">
            <div className="absolute w-[20vw] h-[50vh]">
              <img src="/man/about.jpg" alt="" className="w-full h-full object-cover"/>
            </div>
            <div className="absolute inset-1/2 left-[55vh] top-[10vh] -rotate-30 w-[20vw] h-[50vh]">
              <img src="/images/woman.webp" alt="" className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
        <div className="w-[40vw] flex items-center justify-center h-[100vh]">
          <div className="w-full h-[60vh]">
            {aboutData.map((data,index)=>{
              return(
                <>
                  <h1 className='text-[2em] font-semibold text-[#122766] mt-8 hover:text-blue-500'>
                    <i class="ri-checkbox-circle-line text-[2.3rem] font-light mx-2"></i>
                    {data.title}
                  </h1>
                  <p className="text-[1.25em] leading-1 text-[#122766] mx-12 w-[80%]">{data.description}</p>
                </>
              )
            })}
          </div>
        </div>
      </div>
    </div>
    </>
  )  // Link component to navigate to '/about' route
};

export default AboutUs;
