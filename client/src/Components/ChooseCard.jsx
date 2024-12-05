import React from 'react';
import { Link } from 'react-router-dom';
const ChooseCard=({data})=>{
    return(
        <>
        <Link>
          <div className="bg-white shadow-md rounded-lg p-2  text-center">
                            <img src={data.image} alt="Risk-Free Learning" className="mx-auto"/>
                            <p className="font-bold hover:bg-blue-500 hover:text-white p-2 w-full">{data.title}</p>
            </div>
        </Link>
        </>
    )
}

export default ChooseCard