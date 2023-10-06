import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleCourse = ({ course }) => {
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={course.imgURL} />
                    <Card.Body>
                        <Card.Title>{course.name}</Card.Title>
                        <Card.Text>
                        {course.about}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SingleCourse;