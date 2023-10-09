import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleCourseDetail = () => {
    const courseDetail = useLoaderData();
    console.log(courseDetail);
    return (
        <div>
            
        </div>
    );
};

export default SingleCourseDetail;