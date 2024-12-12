import React from 'react';
import Card from './Card';
import ChooseCard from './ChooseCard';

const WorkData = [
    {
        title: '1.Choose Your Course',
        description: 'Browse our wide selection of high-quality courses across various fields from tech and business to creative arts and personal development.',
        image: '/images/girlLaptop.jpg',
    },
    {
        title: '2.Enroll & Learn',
        description: 'After signing up, dive into your course materials and start your learning journey at your own pace.',
        image: '/images/enroll.webp',
    },
    {
        title: '3.Completion',
        description: 'Engage with the content, complete assignments, and demonstrate your understanding of the subject matter.',
        image: '/images/boyLaptop.webp',
    },
    {
        title: '4.Get Your Money ',
        description: 'Upon successful completion of the course, you will receive a full refund of the money you paid.',
        image: '/images/money.webp',
    },
];

const ChooseData = [
    {
        title: 'Risk-Free Learning',
        image: '/images/Risk.png',
    },
    {
        title: 'Quality Content',
        image: '/images/Quality.png',
    },
    {
        title: 'Flexible Learning',
        image: '/images/Flexible.png',
    },
    {
        title: 'No Hidden Fees',
        image: '/images/NoHidden.png',
    },
    {
        title: 'Empowering You',
        image: '/images/Quality.png',
    },
];

const Work = () => {
    return (
        <>
            <div className="min-h-screen w-full">
                {/* "How it Works?" Section */}
                <div className="flex flex-col items-center px-4 lg:px-10 py-8">
                    <div className="w-full max-w-[1280px]">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#122766] text-center mb-8">
                            How it Works?
                        </h1>
                        <div className="w-full overflow-x-auto">
                           
                            <div className="flex items-stretch gap-4 sm:gap-6 lg:gap-8 xl:gap-10 px-4 sm:px-6 lg:px-8">
                                {WorkData.map((data, index) => (
                                    <div key={index} className="flex-shrink-0">
                                        <Card data={data} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* "Why Choose Us?" Section */}
                <div className="p-8 sm:p-10">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#122766] text-center mb-8">
                        Why Choose Us?
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-[1280px] mx-auto">
                        {ChooseData.map((data, index) => (
                            <ChooseCard data={data} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Work;
