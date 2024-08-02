// src/Components/SearchPage.js
//https://static.wixstatic.com/media/c6ba6c_377676e7db5c4b58ac33dfe0f985bfe0~mv2.gif/v1/fit/w_300,h_300,al_c,q_80/file.gif
//https://ph-files.imgix.net/7bbf78c4-155b-4e2c-bdbe-ca75c64c4edb?auto=format&fit=crop&frame=1&h=512&w=1024
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
                <Form.Group controlId="formInterests">
                  <Form.Label>Interests</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter interests (e.g., museums, parks)"
                    value={interests}
                    onChange={(e) => setInterests(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group controlId="formTime">
                  <Form.Label>Time Available</Form.Label>
                  <Form.Control
                    type="text"
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
      <Row className='mb-5'>
        <img src="https://ph-files.imgix.net/7bbf78c4-155b-4e2c-bdbe-ca75c64c4edb?auto=format&fit=crop&frame=1&h=512&w=1024" alt="no background0" ></img>
      </Row>
      <Row>
        <Col md={12}>
          <h2 className="text-left mb-4">Popular Destinations</h2>
          <Carousel>
            <Carousel.Item>
              <Row>
                <Col md={3} className="mb-4">
                  <Card>
                    <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.F5yrDEhTvQeHJggS-hPqNgHaEK?w=331&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
                    <Card.Body>
                      <Card.Title>Hyderabad</Card.Title>
                      <Card.Text>
                        Explore the rich history and vibrant culture of Hyderabad.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} className="mb-4">
                  <Card>
                    <Card.Img variant="top" src="https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg" />
                    <Card.Body>
                      <Card.Title>Delhi</Card.Title>
                      <Card.Text>
                        Experience the bustling city life and historical landmarks of Delhi.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} className="mb-4">
                  <Card>
                    <Card.Img variant="top" src="https://img.veenaworld.com/wp-content/uploads/2023/01/shutterstock_2044050407-scaled.jpg" />
                    <Card.Body>
                      <Card.Title>Kashmir</Card.Title>
                      <Card.Text>
                        Enjoy the serene beauty and picturesque landscapes of Kashmir.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} className="mb-4">
                  <Card>
                    <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.tGZl769eGg5DhUw3BQJz-AHaEY?w=273&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
                    <Card.Body>
                      <Card.Title>Mumbai</Card.Title>
                      <Card.Text>
                        Discover the lively spirit and entertainment hub of Mumbai.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col md={3} className="mb-4">
                  <Card>
                    <Card.Img variant="top" src="https://dmgupcwbwy0wl.cloudfront.net/system/images/000/279/744/c55090acf4b5bdfbea938c8543a4ff4f/original/Bangalore-City-Tour-Slide-2.jpg?1551347929" />
                    <Card.Body>
                      <Card.Title>Bangalore</Card.Title>
                      <Card.Text>
                        Explore the IT hub and vibrant culture of Bangalore.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} className="mb-4">
                  <Card>
                    <Card.Img variant="top" src="https://media.cntraveller.in/wp-content/uploads/2016/10/arambol.jpg" />
                    <Card.Body>
                      <Card.Title>Goa</Card.Title>
                      <Card.Text>
                        Enjoy the beaches and nightlife of Goa.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3} className="mb-4">
                  <Card>
                    <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.Paq060V_sg9Y-W-iwWnhdQHaFg?rs=1&pid=ImgDetMain" />
                    <Card.Body>
                      <Card.Title>Jaipur</Card.Title>
                      <Card.Text>
                        Discover the palaces and heritage of Jaipur.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchComponent;
