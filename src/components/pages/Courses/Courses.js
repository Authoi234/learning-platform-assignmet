import React from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from '../SingleCourse/SingleCourse';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div>
            <Row xs={1} md={2} className="g-4">
                {courses.map(singleCourse => <SingleCourse key={singleCourse.id} course={singleCourse}></SingleCourse>)}
            </Row>
        </div>
    );
};

export default Courses;