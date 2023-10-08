import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleCourse = ({ course }) => {
    return (
        <div>
            <Col className='p-3'>
                <Card>
                    <Card.Img variant="top" className='img-fluid group-hover:opacity-100 p-2 single-card' style={{}} width={'200px'} src={course.img} />
                    <Card.Body>
                        <Card.Title>{course.name}</Card.Title>
                        <Card.Text>
                        {course.about}
                        </Card.Text>
                    </Card.Body>
                    <Card.ImgOverlay><button className="btn glass text-white hover:drop-shadow-xl">Go To This Page</button></Card.ImgOverlay>           
                </Card>
            </Col>
        </div>
    );
};

export default SingleCourse;