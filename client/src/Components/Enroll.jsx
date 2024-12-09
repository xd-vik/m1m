<<<<<<< Updated upstream
import React from 'react'
import { Link } from 'react-router-dom'

=======
import React from 'react';
import { Link } from 'react-router-dom';
>>>>>>> Stashed changes

const EnrollData = [
    {
        title: 'Animation',
        image: '/images/animation.jpg',
        cost: '$140',
        duration: '4 months',
        videos: '140 live videos',
    },
    {
        title: 'Animation',
        image: '/images/animation.jpg',
        cost: '$100',
        duration: '3.5 months',
        videos: '180 live videos',
    },
    {
        title: 'Animation',
        image: '/images/animation.jpg',
        cost: '$220',
        duration: '4 months',
        videos: '200 live videos',
    },
];

const EnrollCard = ({ data }) => {
    return (
        <Link>
            <div className="min-w-[280px] max-w-[320px] h-auto shadow-lg rounded-lg flex flex-col m-3 lg:m-2">
                <div className="w-full h-48">
                    <img src={data.image} alt={data.title} className="h-full w-full object-cover rounded-t-lg" />
                </div>
                <div className="p-4 flex flex-col items-center">
                    <h1 className="text-lg font-medium my-2 hover:scale-105 transition-transform duration-150 ease-in-out">
                        <i className="ri-play-circle-fill text-[#596894] text-xl"></i> {data.videos}
                    </h1>
                    <h1 className="text-lg font-medium my-2 hover:scale-105 transition-transform duration-150 ease-in-out">
                        <i className="ri-timer-2-fill text-[#596894] text-xl mr-2"></i> {data.duration}
                    </h1>
                    <h1 className="text-lg font-medium my-2 hover:scale-105 transition-transform duration-150 ease-in-out">
                        <i className="ri-money-dollar-circle-line text-[#596894] text-xl mr-2"></i> Cost: {data.cost}
                    </h1>
                    <button className="px-4 py-2 mt-4 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
                        Enroll Now
                    </button>
                </div>
            </div>
        </Link>
    );
};

const Enroll = () => {
    return (
        <div className="min-h-screen w-full px-4">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center font-semibold text-[#122766] my-6">
                Enroll Your Favourite Course
            </h1>
            <div className="w-full max-w-[1280px] mx-auto flex justify-around flex-wrap gap-3 lg:gap-6 mb-6">
                {['All Courses', 'Photography', 'Animation', 'Development', 'Design/Art'].map((course, index) => (
                    <button
                        className="px-6 py-2 text-sm sm:text-base lg:text-lg border border-gray-300 rounded-lg text-blue-500 hover:bg-blue-500 hover:text-white transition"
                        key={index}
                    >
                        {course}
                    </button>
                ))}
            </div>
            <div className="w-full overflow-x-auto">
                <div className="flex justify-between items-center gap-6 px-6 lg:px-10 flex-nowrap">
                    {EnrollData.map((data, index) => (
                        <EnrollCard data={data} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Enroll;
