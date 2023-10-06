import React from 'react';
import Footer from './../pages/Footer/footer';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='text-center'>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://spunout.ie/wp-content/uploads/elementor/thumbs/student_taking_a_college_exam-q0ubk6jimq3ppmlo959ec77k2gvr1m3xlkwn6sb73s.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Welcome to out computer programming educational platform. I want, you can know something extra from us</p>
                        <button className="btn btn-primary"><Link to={'/courses'} className='decoration-0'>See Our Courses</Link></button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;