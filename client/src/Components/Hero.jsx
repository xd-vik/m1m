import React from "react";

const Hero=()=>{
    return(
        <>
        <div className='w-full h-[90vh] flex'>
        <div className='lg:h-full lg:w-[65%] md:h-[80%] md:w-[60%] w-[70%] h-[60%] flex items-center justify-center'>
          <div className='lg:w-[60vw] lg:h-[70vh] lg:p-10 md:w-[58vw] md:h-[65vh] md:p-3 p-1'>
            <h1 className='lg:text-[3.5em] md:text-[2.3em] text-[0.9em] font-semibold text-[#122766] '>Mission One Million:<br></br>Empowering Growth and Learning</h1>
            <p className='lg:text-[1em] md:text-[0.9em] text-[0.4em] pt-2'>The M1M project appears to combine education and financial rewards to incentivize learning. Users can buy courses to gain knowledge or skills, and upon successful completion of these courses, they are refunded the money they initially spent. This approach ensures learners stay motivated to complete the course, making it an engaging educational and financial ecosystem.</p>
            <div className='my-5'>
              <button className='lg:px-5 md:px-3 px-2 py-1 lg:mt-6 mt-2 rounded-lg hover:bg-blue-800 lg:text-[1.34rem] md:text-[0.9rem] text-[0.4rem] bg-[#015DFE] text-white border-2 border-[#015DFE] font-semibold md:text-[0.9em]'>Explore</button>
            </div>
          </div>
        </div>
        <div className='relative lg:h-full lg:w-[40%] md:w-[50%] md:h-[80%] h-[40vh] w-[40%] overflow-hidden'>
          <div className='absolute bg-[#122766] lg:h-[45vh] lg:w-[45vh] md:h-[36vh] md:w-[36vh] h-[20vh] w-[20vh] rounded-[50%] left-[60%] top-[25%]'>
            <h1 className='absolute lg:text-[2.3em] md:text-[1.3em] text-[0.52rem] font-semibold text-white left-[15%] top-[33%]'>Our<br></br> Mission</h1>
            <div className='absolute lg:h-[18vh] lg:w-[18vh] rounded-[50%] bg-white -top-[40%] md:h-[15vh] md:w-[15vh] h-[8vh] w-[8vh] border-[#122766] border-2'>
              <h1 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:text-[1.5rem] md:text-[1rem] text-[0.3rem] text-[#122766]">Empower</h1>
            </div>
            <div className='absolute lg:h-[18vh] lg:w-[18vh] rounded-[50%] bg-white lg:bottom-[15vh] lg:bottom-[15vh] md:bottom-[10vh] md:h-[15vh] md:w-[15vh] h-[8vh] w-[8vh] -left-[50%] border-[#122766] border-2'>
              <h1 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:text-[1.5rem] md:text-[1rem] text-[0.3rem] text-[#122766]">Engage</h1>
            </div>
            <div className='absolute lg:h-[18vh] lg:w-[18vh] rounded-[50%] bg-white -bottom-[17vh] -left-[3vh] md:h-[15vh] md:w-[15vh] h-[8vh] w-[8vh] border-[#122766] border-2'>
              <h1 class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:text-[1.5rem]  md:text-[1rem] text-[0.3rem] text-[#122766]">Enable</h1>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}
export default Hero;