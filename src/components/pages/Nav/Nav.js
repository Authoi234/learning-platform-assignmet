import React from 'react';
import { Container, Nav,  Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" style={{backdropFilter: 'blur(20px)'}} bg='light' className="bg-transparent fixed-top">
                <Container>
                    <img width={'8%'} src={require('../../../assets/download1.png')} fluid alt='' />
                    <Navbar.Brand href="https://learning-platform-assignmemt.web.app/" className='text-black fw-bold'>Authoi Education</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto align-items-center">
                            <Link className="text-decoration-none text-black fs-5 me-3" to={'/courses'}>Courses</Link>
                            <Link className="text-decoration-none text-black fs-5 me-3" >Blog</Link>
                            <Link className="text-decoration-none text-black fs-5 me-3" >FAQ</Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;