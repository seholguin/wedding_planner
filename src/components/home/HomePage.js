import React from 'react';
import { Container, Button, Navbar, Nav} from 'react-bootstrap';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            {/* Navigation Bar */}
            {/* 
            <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom"> 
                <Container>
                    <Navbar.Brand href="/" className="brand-name">
                        <span className="brand-icon">💎</span> Wedding Planner
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/" className="nav-link">Home</Nav.Link>
                            <Nav.Link href="/my-events" className="nav-link">My Events</Nav.Link>
                            <Nav.Link href="/events-attending" className="nav-link">Events I'm Attending</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> 
*/}
            {/* Hero Section */}
            <div className="hero-section">
                <Container className="hero-content">
                    <h1 className="hero-title">Welcome to Wedding Planner</h1>
                    <p className="hero-subtitle">
                        Helping you make unforgettable memories
                    </p>
                    <div className="hero-buttons">
                        <Button variant="dark" size="lg" className="hero-button">Create New Event</Button>
                        <Button variant="dark" size="lg" className="hero-button">Attend Existing Event</Button>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default HomePage;
