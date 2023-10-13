import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from '../SingleCourse/SingleCourse';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div>
            <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-0 py-16">
                {courses.map(singleCourse => <SingleCourse key={singleCourse.id} course={singleCourse}></SingleCourse>)}
            </div>
        </div>
    );
};

export default Courses;