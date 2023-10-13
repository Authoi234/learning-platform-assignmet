import React, { useContext } from 'react';
import { Button, Container, Nav,  Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserLarge } from "react-icons/fa6";
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch(e => console.log(e))
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" style={{backdropFilter: 'blur(20px)'}} bg='light' className="h-20 bg-transparent fixed-top">
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
                            {
                                user ? <p className='d-flex align-items-center'>{user?.photoURL ? <img className='w-10' src={user.photoURL} alt=''/> : <FaUserLarge></FaUserLarge>}  <Button onClick={handleLogOut} variant='outline-danger' className='fw-bold'>Log Out</Button></p> : <Button variant='outline-danger' href='/login' className='border d-flex text-primary fs-6 px-5 align-items-center'>Login</Button>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;