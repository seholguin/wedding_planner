import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/" style={{"color": 'gold'}}>
                    <span className="brand-icon">💎</span> Wedding Planner
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav 
                        className="me-auto my-2 my-lg-"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/Registry">registry</NavLink> 
                        <NavLink className="nav-link" to="/attend-Events">Attend Event</NavLink>
                        <NavLink className="nav-link" to="/create-event">Create Event</NavLink> 
                        </Nav>
                        <Button variant="outline-info" className="me-2">Login</Button>
                        <Button variant="outline-info">Register</Button>                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header