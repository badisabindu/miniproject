

// // src/Components/HeaderComponent.js
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import ProfileIcon from './ProfileIconComponent';
// import { useEffect } from 'react';
// import { useAuth } from './AuthProvider';

// const HeaderComponent = () => {
//   const { token} = useAuth();
//     const[isLoggedIn,setIsLoggedIn]=useState(false)
//     // useEffect(() => {
//     //     const token = localStorage.getItem('token'); // Replace with your actual token retrieval logic
//     //     if (token) {
//     //       setIsLoggedIn(true);
//     //       console.log(isLoggedIn);
//     //     } else {
//     //       setIsLoggedIn(false);
//     //       console.log(isLoggedIn);
//     //     }
//     //   }, [token]);
//       const  {logOut}  = useAuth();
//       const handleLogout = () => {
//           console.log("Logout button clicked");
//           logOut();
//       };

//   return (
//     <Navbar bg="dark" variant="dark" expand="lg" className="mb-0">
//       <Container>
//         <Navbar.Brand as={Link} to="/">Smart City</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ml-auto">
//             <Nav.Link as={Link} to="/">Home</Nav.Link>
//              {!isLoggedIn ? (
//                         <li>
//                            <Link to="/login" className="btn btn-color text-light me-2">Login</Link>
//                         </li>
//                     ) : <li>
//                     <Link to="/" className="btn btn-color text-light me-2" onClick={handleLogout}>Logout</Link>
//                  </li>}
//                <div style={{ position: 'absolute', right: '20px', top: '10px' }}>
//                   <ProfileIcon />
//               </div>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default HeaderComponent;
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import ProfileIcon from './ProfileIconComponent'; // Make sure this path is correct
import { useAuth } from './AuthProvider';

const HeaderComponent = () => {
  const { token, logOut, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logout button clicked");
    logOut();
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-0">
      <Container>
        <Navbar.Brand as={Link} to="/">Smart City</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            {!isLoggedIn ? (
              <li>
                <Button className="btn btn-color text-light me-2" onClick={handleLogin}>Login</Button>
                <Button className="btn btn-color text-light me-2" onClick={handleSignup}>Signup</Button>
              </li>
            ) : (
              <Button className="btn btn-color text-light me-2" onClick={handleLogout}>Logout</Button>
            )}
            {isLoggedIn && ( // Only show ProfileIcon when logged in
              <div style={{ position: 'absolute', right: '20px', top: '10px' }}>
                <ProfileIcon />
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderComponent;
