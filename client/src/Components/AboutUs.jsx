import React from "react";
import about from "/images/about.jpg";
import man from "/images/man.png";
import manage from "/images/manage.png";
import  woman  from "/images/woman.jpeg";

const aboutData=[
  {
   title:"Enrollment & Payment",
   description:"Students enroll in courses on the platform and pay an upfront fee to access the course content."
  },
  {
    title:"Assignments & Completion",
    description:"The course includes assignments that the students need to complete in order to progress or prove mastery of the material."
   },
   {
    title:"Money-back Incentive",
    description:"As students complete their assignments, they receive a refund or partial refund of their original payment based on their progress. This incentivizes active participation and completion."
   }
]
const AboutUs = () => {
  return (
    <>
    <div className='min-h-screen flex flex-col items-center justify-center w-full'>
      <div className="min-h-screen w-full flex">
        <div className="w-[60vw] h-[100vh] flex flex-col items-center">
          <h1 className='text-[2.7em] w-[50vw] font-semibold text-[#122766] m-6'>Your Path to Knowledge, Where Completion Pays You Back</h1>
          <div className="relative flex items-center justify-center w-[80%] h-[50vh]">
            <div className="absolute w-[35vw] mt-2 h-[40vh]">
              <img src={woman} alt="" className="w-full h-full object-contain"/>
            </div>
            <div className="absolute w-[30vw] top-[28vh] left-[50vh] mt-2 h-[35vh]">
              <img src={man} alt="" className="w-full h-full object-contain"/>
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
                  <p className="text-[1em] leading-1 text-[#122766] mx-12 w-[80%]">{data.description}</p>
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
