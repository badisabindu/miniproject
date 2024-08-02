

// src/Components/HeaderComponent.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const HeaderComponent = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Example function to simulate login
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // Example function to simulate logout
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-0">
      <Container>
        <Navbar.Brand as={Link} to="/">Smart City</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            {!isAuthenticated ? (
              <>
                <Nav.Link as={Link} to="/login" onClick={handleLogin}>Login</Nav.Link>
                <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/" onClick={handleLogout}>Logout</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
