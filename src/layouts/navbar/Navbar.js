import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const Navigation = () => {
    let navigate = useNavigate();
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <span onClick={() => navigate('/')}>
                        Logo
                        </span>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navigate('/')}>Trips</Nav.Link>
                        <Nav.Link onClick={() => navigate('/merch')}>Merchandise</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;