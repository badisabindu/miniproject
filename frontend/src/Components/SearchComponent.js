// src/Components/SearchPage.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Carousel } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import './test.css';

const SearchComponent = () => {
  const [location, setLocation] = useState('');
  const [interests, setInterests] = useState('');
  const [time, setTime] = useState('');
  const [radius, setRadius] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log({ location, interests, time, radius });
  };
  

  return (
    <Container className="mt-5">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center mb-4">Find Your Next Adventure</h1>
          <Form onSubmit={handleSearch}>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group controlId="formLocation">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                {/* <Form.Group controlId="formInterests">
                  <Form.Label>Interests</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter interests (e.g., museums, parks)"
                    value={interests}
                    onChange={(e) => setInterests(e.target.value)}
                  />
                </Form.Group> */}
                <Form.Group controlId="formInterests">
  <Form.Label>Interests</Form.Label>
  <Form.Control
    as="select"
    value={interests}
    onChange={(e) => setInterests(e.target.value)}
  >
    <option value="">Select interests</option>
    <option value="food">Food</option>
    <option value="hotels">Hotels</option>
    <option value="hospital">Hospitals</option>
    <option value="shopping">Shopping</option>
    <option value="theaters">Theaters</option>
    <option value="historical sites">Historical Sites</option>
  </Form.Control>
</Form.Group>

              </Col>
              <Col md={6} className="mb-3">
                <Form.Group controlId="formTime">
                  <Form.Label>Time Available</Form.Label>
                  <Form.Control
                    type="number"
                    min='0'
                    placeholder="Enter time available (e.g., 2 hours)"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group controlId="formRadius">
                  <Form.Label>Radius (km)</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter search radius in kilometers"
                    min='0'
                    value={radius}
                    onChange={(e) => setRadius(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col className="text-center">
                <Button variant="primary" type="submit">
                  <FaSearch /> Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      
      
    </Container>
  );
};

export default SearchComponent;

