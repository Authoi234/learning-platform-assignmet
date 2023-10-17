import React, { useContext, useState } from 'react';
import { Button, Container, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserLarge, FaSun, FaMoon } from "react-icons/fa6";
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const NavBar = () => {
    const [theme, setTheme] = useState('Light');
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(e => console.log(e))
    }
    
    const toogleTheme = () => {
        if (theme === 'Light') {
            setTheme('Dark')
        }
        if(theme === 'Dark'){
            setTheme('Light')
        }
    }

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {user.displayName}
        </Tooltip>
    );

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" style={{ backdropFilter: 'blur(20px)' }} bg='light' className="h-20 bg-transparent fixed-top">
                <Container>
                    <img width={'8%'} src={require('../../../assets/download1.png')} fluid alt='' />
                    <Navbar.Brand href="https://learning-platform-assignmemt.web.app/" className='text-black fw-bold'>Authoi Education</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto align-items-center">
                            <Link className="text-decoration-none text-black fs-5 me-3" to={'/courses'}>Courses</Link>
                            <Link className="text-decoration-none text-black fs-5 me-3" to={'/blog'}>Blog</Link>
                            <Link className="text-decoration-none text-black fs-5 me-3" >FAQ</Link>
                        </Nav>
                        <Nav>
                            <div>
                                <button className="btn mx-3" type="button" onClick={toogleTheme}>{theme === 'Light' ? <FaSun className='fs-4 hover:animate-spin'></FaSun> : <FaMoon className='fs-4'></FaMoon>}</button>
                            </div>
                            {
                                user ? <p className='d-flex align-items-center'>{user?.photoURL ? <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}><img className='w-10' src={user.photoURL} alt='' /></OverlayTrigger> : <FaUserLarge></FaUserLarge>}  <Button onClick={handleLogOut} variant='outline-danger' className='fw-bold'>Log Out</Button></p> : <Button variant='outline-danger' href='/login' className='border d-flex text-primary fs-6 px-5 align-items-center'>Login</Button>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;