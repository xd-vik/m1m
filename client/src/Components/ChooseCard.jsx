import React from 'react';
import { Link } from 'react-router-dom';

const ChooseCard = ({ data }) => {
    return (
        <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md">
          
            <img 
                src={data.image} 
                alt={data.title} 
                className="w-48 h-48 sm:w-64 sm:h-64 object-cover mb-4 rounded" 
            />
            <h2 className="text-xl font-semibold mb-2">{data.title}</h2>
            <button className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Learn More
            </button>
        </div>
    );
};

export default ChooseCard;
