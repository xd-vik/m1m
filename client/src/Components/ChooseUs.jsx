import React from 'react';
import ChooseCard from './ChooseCard';

const ChooseData=[
    {
        title:'Risk-Free Learning',
        image:'/images/Risk.png',
    },
    {
        title:'Quality Content',
        image:'/images/Quality.png',
    },
    {
        title:'Flexible Learning',
        image:'/images/Flexible.png',
    },
    {
        title:'No Hidden Fees ',
        image:'/images/NoHidden.png',
    }
]
const ChooseUs=()=>{
    return(
        <div className='w-full my-10'>
            <div className='flex items-center justify-center'>
                <div className='w-[90%] h-[50vh]'>
                    <h1 className='text-[3.5em] font-semibold text-[#122766]'>Why Choose Us?</h1>
                    <div className='w-full flex flex-wrap justify-around h-[45vh] py-1'>
                        {ChooseData.map((data,index)=>{
                            return(
                                <ChooseCard data={data} key={index}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseUs;