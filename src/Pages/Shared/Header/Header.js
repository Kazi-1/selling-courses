import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import icon from '../../../images/icon/icon2.png';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div style={{ backgroundColor: '#00DDFB' }} >
            <Navbar variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className="text-light fs-5 fw-bold">
                            <img width="15%" src={icon} alt="" />
                           <p className="d-inline ms-4">McFIT Fitness Studio</p>  
                        </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-center">
                        <Nav.Link as={HashLink} to="/home#home" className="text-white fs-5 fw-bold">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services" className="text-white fs-5 fw-bold">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/courses" className="text-white fs-5 fw-bold">Courses</Nav.Link>
                        <Nav.Link as={HashLink} to="/blog" className="text-white fs-5 fw-bold">Blog</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant='light' className="text-white fs-5 fw-bold bg-danger">Logout</Button>
                            : <Nav.Link as={Link} to="/login" className="text-white fs-5 fw-bold">Login</Nav.Link>}
                        <Navbar.Text className='ms-3'>
                            <span className="text-white fs-5 fw-bold">Signed in as:</span> <a 
                            
                            className="text-white fs-5 fw-bold signed-in-user" href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;