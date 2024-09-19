// src/Components/FooterComponent.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FooterComponent = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row className="text-center">
          <Col md={6} className="mb-0">
            <h5>About Us</h5>
            <p>Your guide to smart travel and global exploration.</p>
          </Col>
          <Col md={6} className="mb-0">
            <h5>Contact</h5>
            <p>Email: info@smartcitytravelling.com</p>
            <p>Phone: +123 456 7890</p>
          </Col>
          
        </Row>
        {/* <Row>
          <Col className="text-center mt-0">
            <p>&copy; {new Date().getFullYear()} Smart City Travelling. All rights reserved.</p>
          </Col>
        </Row> */}
      </Container>
    </footer>
  );
};

export default FooterComponent;
