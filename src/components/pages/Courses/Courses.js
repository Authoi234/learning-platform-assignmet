import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleCourse from '../SingleCourse/SingleCourse';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return ( 
        <div className='flex' >
            <div className="row row-cols-sm-1 row-cols-md-2 py-16" style={{width: '73%'}}>
                {courses.map(singleCourse => <SingleCourse key={singleCourse.id} course={singleCourse}></SingleCourse>)}
            </div>
            <div className='mt-20' style={{width: '23%'}}>
            <div className='row row-cols-sm-1'>
                {courses.map(course => <Link to={`/courses/${course.id}`} className='text-2xl w-5 pt-20 decoration-0'>{course.name}</Link>)}
            </div>
            </div>
        </div>
    );
};

export default Courses;