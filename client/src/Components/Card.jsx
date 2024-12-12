import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
    return (
        <>
            <Link>
                <div className="w-[250px] h-[350px] m-4 transition duration-300 ease-in-out rounded-lg border-2 border-[#cccccc] hover:scale-105 shadow-lg overflow-hidden">
                    <div className="w-full h-[55%]">
                        <img 
                            src={data.image} 
                            alt="" 
                            className="w-full h-full object-contain rounded-lg" 
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 h-[45%]">
                        <h1 className="text-sm sm:text-base md:text-lg font-semibold text-[#122766] text-center line-clamp-2">{data.title}</h1>
                        <p className="text-xs sm:text-sm md:text-base text-center text-[#122766] line-clamp-3">{data.description}</p>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default Card;
