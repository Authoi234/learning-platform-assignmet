import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const Checkout = () => {
    const data = useLoaderData();

    // data for chart

    const chartData = [
        { name: 'React', value: 300 },
        { name: 'C++', value: 246 },
        { name: 'JS', value: 320 },
        { name: 'Express', value: 400 },
        { name: 'Html', value: 278 },
        { name: 'CSS', value: 198 },
    ];
    const data02 = [
        { name: 'React', value: 300 },
        { name: 'C++', value: 246 },
        { name: 'JS', value: 320 },
        { name: 'Express', value: 400 },
        { name: 'Html', value: 278 },
        { name: 'CSS', value: 198 },
    ];

    console.log(data);
    return (
        <div className='mt-20'>
            <div className='d-flex justify-content-center'>
                <img className='w-32 h-32' src={data.img} alt='' />
            </div>
            <h1>{data.title}</h1>
            <div className='d-flex justify-content-center mb-20'>
                <h3 className='px-3 py-2'>Course Id: {data.id}</h3>
                <h3 className='px-3 py-2'>Teacher: {data.teacher}</h3>
            </div>
            <h2>A Video From Us</h2>
            <div className='d-flex justify-content-center mb-20'>
                <iframe className='lg:w-3/6 w-full' height="300" src={data.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <h2>How Much Students Complete the Courses</h2>
            <div className='w-full h-56'>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={600} height={600}>
                        <Pie
                            dataKey="value"
                            isAnimationActive={false}
                            data={chartData}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            label
                        />
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Checkout;