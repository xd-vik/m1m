import React from 'react';
import Card from './Card';
import girlLaptop from '../../public/images/girlLaptop.jpg'
import enroll from '../../public/images/enroll.webp'
import boyLaptop from '../../public/images/boyLaptop.webp'
import money from '../../public/images/money.webp'
const WorkData=[
    {
        title:'1.Choose Your Course',
        description:'Browse our wide selection of high-quality courses across various fields from tech and business to creative arts and personal development.',
        image:'/public/images/girlLaptop.jpg',
    },
    {
        title:'2.Enroll & Learn',
        description:'After signing up, dive into your course materials and start your learning journey at your own pace.',
        image:'/public/images/enroll.webp',
    },
    {
        title:'3.Completion',
        description:'Engage with the content, complete assignments, and demonstrate your understanding of the subject matter.',
        image:'/public/images/boyLaptop.webp',
    },
    {
        title:'4.Get Your Money ',
        description:'Upon successful completion of the course, you will receive a full refund of the money you paid. ',
        image:'/public/images/money.webp',
    }
]
const Work=()=>{
    return(
        <>
        <div className='min-h-screen w-full flex items-center justify-center'>
            <div className='w-[90%] h-[90vh]'>
                <h1 className='text-[3.5em] font-semibold text-[#122766]'>How it Works?</h1>
                <div className='w-full flex flex-wrap justify-between h-[45vh] py-1'>
                    {WorkData.map((data,index)=>{
                        return(
                            <Card data={data} key={index}/>
                        )
                    })}
                </div>
                <h1></h1>
            </div>
        </div>
        </>
    )
}

export default Work;