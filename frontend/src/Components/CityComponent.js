import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card, Carousel } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { useState } from "react";
 import {useAuth} from './AuthProvider.js'
import axios from '../axiosSetup';
// import {Button} from 'react-bootstrap'
function CityComponent(){
  const {city,setCity}=useAuth();
 const navigate=useNavigate();
 const handleCity=async()=>{
    navigate('/search')
 }


    return(
        
        <Container className="mt-5">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center mb-4">Find Your Next Adventure</h1>
          <Form onSubmit={handleCity}>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group controlId="formLocation">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter city"
                   onChange={(e) => setCity(e.target.value)}
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
                    <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.F5yrDEhTvQeHJggS-hPqNgHaEK?w=331&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7" style={{height:'200px'}}/>
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
                    <Card.Img variant="top" src="https://dmgupcwbwy0wl.cloudfront.net/system/images/000/279/744/c55090acf4b5bdfbea938c8543a4ff4f/original/Bangalore-City-Tour-Slide-2.jpg?1551347929" style={{height:'220px'}}/>
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
}
export default CityComponent;