import React from 'react';
import { Link } from 'react-router-dom';
const ChooseCard=({data})=>{
    return(
        <>
        <Link>
            <div className='w-[16vw] m-1 h-[32vh] transition duration-300 ease-in-ease-out rounded-lg bg-white border-2 border-[#cccccc] hover:scale-110 shadow-lg'>
                <div className='w-full h-[76%] '>
                    <img src={data.image} alt="" className='w-full object-contain rounded-lg'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='w-full h-[50px] pt-[4%] pl-[20%] hover:text-white hover:bg-blue-500 text-[1.1em] font-semibold text-black'>{data.title}</h1>
                </div>
            </div>
        </Link>
        </>
    )
}

export default ChooseCard