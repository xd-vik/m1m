import React from 'react'
import { Link } from 'react-router-dom'


const EnrollData=[
    {
        title:'Animation',
        image:'images/animation.jpg',
        cost:'$140',
        duration:'4 months',
        videos:'140 live videos'
    },
    {
        title:'Animation',
        image:'images/animation.jpg',
        cost:'$100',
        duration:'3.5 months',
        videos:'180 live videos'
    },
    {
        title:'Animation',
        image:'images/animation.jpg',
        cost:'$220',
        duration:'4 months',
        videos:'200 live videos'
    }
]

const EnrollCard=({data,index})=>{
    return(
        <Link>
    <div className='w-[30vw] h-[90%] shadow-lg rounded-lg flex flex-col' key={index}>
            <div className='w-full h-[32vh]'>
                <img src={data.image} alt="" className='h-full w-full rounded-lg'/>
            </div>
            <div className='h-[28vh] w-full flex flex-col flex-wrap items-center gap-5'>
                <div className='h-[8.5vh] w-[28vh]'>
                    <h1 className='text-[1.25em] m-2 hover:scale-90 transition duration-150 ease-in-ease-out'> <i class="ri-play-circle-fill text-[#596894] text-[1.8rem]"></i>{data.videos}</h1>
                </div>
                <div className='h-[8.5vh] w-[28vh]'>
                    <h1 className='text-[1.25em] m-2 hover:scale-90 transition duration-150 ease-in-ease-out'><i class="ri-timer-2-fill text-[#596894] text-[1.8rem] mr-2"></i>{data.duration}</h1>
                </div>
                <div className='h-[8.5vh] w-[28vh]'>
                    <h1 className='text-[1.25em] m-2 hover:scale-90 transition duration-150 ease-in-ease-out'><i class="ri-money-dollar-circle-line text-[#596894] text-[1.8rem] mr-2"></i>Cost:{data.cost}</h1>
                </div>
                <div className='h-[8.5vh] w-[28vh] flex items-start justify-start'>
                    <button className='px-4 hover:bg-blue-500 hover:text-white py-2 mx-2 text-[1.2em] border-2 rounded-lg border-[#cccccc] text-blue-500'>Enroll Now</button>
                </div>
            </div>
        </div>
    </Link>
    )
}

const Enroll=()=>{
    return (
        <div className='min-h-screen w-full'>
            <h1 className='text-[3em] text-center font-semibold text-[#122766]'>Enroll Your Favourite Course</h1>
            <div className='h-[8vh] w-full flex gap-10 items-center justify-center mt-5'>
                {['All Courses','Photography','Animation','Development','Design/Art'].map((courses,index)=>{
                    return(
                    <button className='px-6 hover:bg-blue-500 hover:text-white py-2 mx-2 text-[1.2em] border-2 rounded-lg border-[#cccccc] text-blue-500' key={index}>{courses}</button>
                    )
                })}
            </div>
            <div className='w-full h-[60vh] mt-10 flex flex-wrap items-center justify-around'>
                {EnrollData.map((data,index)=>{
                    return(
                        <EnrollCard data={data} key={index}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Enroll;