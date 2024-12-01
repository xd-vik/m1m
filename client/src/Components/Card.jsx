import React from 'react';
import girlLaptop from '../../public/images/girlLaptop.jpg'
import { Link } from 'react-router-dom';
const Card=({data})=>{
    return(
        <>
        <Link>
            <div className='w-[18vw] m-5 h-[35vh] transition duration-300 ease-in-ease-out rounded-lg bg-white border-2 border-[#cccccc] hover:scale-125 shadow-lg'>
                <div className='w-full h-[45%]'>
                    <img src={data.image} alt="" className='w-full h-full object-contain rounded-lg'/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-[1.1em] font-semibold text-[#122766]'>{data.title}</h1>
                    <p className='text-[0.8em] w-[85%] pt-2 text-center text-[#122766]'>{data.description}</p>
                </div>
            </div>
        </Link>
        </>
    )
}

export default Card