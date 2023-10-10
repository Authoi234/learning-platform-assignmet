import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleCourseDetail = () => {
    const courseDetail = useLoaderData();
    console.log(courseDetail);
    return (
        <div className='container'>
            <div className="navbar bg-base-100">
                <h1 className="btn-ghost normal-case text-5xl">{courseDetail.title}</h1>
            </div>
            <div className='lg:flex md:block'>
                <iframe className='lg:w-4/6 w-full' height="300" src={courseDetail.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <div>
                    <h3 className=''>Learn from Video</h3>
                    <p className='py-3 text-lg'>Learn {courseDetail.title} by video. In video our teachers teach you coding directly.After learning you should know basics of previous courses</p>
                </div>
            </div>
            <div>
                <h2 className='py-3 text-4xl'>What is {courseDetail.title}</h2>
                <p className='py-3 text-2xl'>{courseDetail.introductoryDscription}</p>
            </div>
            <div className='flex py-5'>
                <p className='py-3 text-2xl'>{courseDetail.courseBodyDetail}</p>
                <img width={'50%'} src={courseDetail.codeImg} alt='' />
            </div>
            <div>
                <h2 className='py-3 text-4xl'>How It Works</h2>
                <p className='py-3 text-2xl'>{courseDetail.howWorks}</p>
                <img width={'100%'} src={courseDetail.workingImg} alt='' />
            </div>
            <div className='bg-base-300'>
                <h2 className='py-3 text-4xl'>Hello World</h2>
                <div className='w-full h-full p-3 bg-black block'>
                    <h3 className='text-gray-400 pr-10'>{courseDetail.helloWorld.line1}</h3>
                    <h3 className='text-gray-400 pl-10'>{courseDetail.helloWorld.line2}</h3>
                    <h3 className='text-gray-400 pr-10'>{courseDetail.helloWorld.line3}</h3>
                </div>
                <div>
                    <span className='badge badge-primary'>OUTPUT</span>
                    <div className='w-full h-full p-3 bg-white shadow-lg block'>
                        <h1>Hello World !</h1>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='py-4 text-4xl'>What is the History of {courseDetail.title}</h2>
                <p className='py-3 text-2xl'>{courseDetail.history}</p>
            </div>
            <div className="hero h-full bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={courseDetail.creator} className="w-1/5 rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">The creator of {courseDetail.title}</h1>
                        <p className="py-6">He creates {courseDetail.title}, through his efforts. My teacher tells us 'No Pain No Gain'</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCourseDetail;