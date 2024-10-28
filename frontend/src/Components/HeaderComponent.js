import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Button, Dropdown } from 'react-bootstrap';
import { useAuth } from './AuthProvider';

const HeaderComponent = () => {
  const { logOut, isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);

  // Handle window resize to update screen size state
  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 992);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = () => {
    console.log("Logout button clicked");
    logOut();
  };

  const handleSignup = () => navigate('/signup');
  const handleLogin = () => navigate('/login');
  const handleProfile = () => navigate('/profile-edit');
  const handleHome = () => navigate('/city');

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-0">
      <Container>
        <Navbar.Brand as={Link} to="/">Smart City</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {!isLoggedIn ? (
              <>
                <Button 
                  className="btn btn-color text-light me-2 mb-2 mb-lg-0" 
                  onClick={handleLogin}>
                  Login
                </Button>
                <Button 
                  className="btn btn-color text-light me-2 mb-2 mb-lg-0" 
                  onClick={handleSignup}>
                  Signup
                </Button>
              </>
            ) : isSmallScreen ? (
              // Render plain links for small screens
              <>
                <Nav.Link as={Link} to="/city" className="text-light">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/profile-edit" className="text-light">
                  Profile
                </Nav.Link>
                <Nav.Link onClick={handleLogout} className="text-light">
                  Logout
                </Nav.Link>
              </>
            ) : (
              // Render dropdown for larger screens
              <Dropdown align="end" className="me-3">
                <Dropdown.Toggle 
                  variant="link" 
                  id="dropdown-profile-icon" 
                  style={{ border: 'none', boxShadow: 'none' }}
                >
                  <i className="bi bi-person-circle" style={{ fontSize: '1.75rem', color: "#ffffff" }}></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleHome}>Home</Dropdown.Item>
                  <Dropdown.Item onClick={handleProfile}>Profile</Dropdown.Item>
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
