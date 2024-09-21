// src/Components/LandingComponent.js
import React from 'react';
import { Button, Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'



const LandingComponent = () => {
  return (
    <div>
      <MainSection />
      <FeaturesSection />
    </div>
  );
};

const MainSection = () => {
  const navigate=useNavigate();
  const handleStart = () => {
    navigate('/city');  
  };
  const handleLearnMore=()=>{
    const features =document.getElementById("learn")
    features.scrollIntoView({behavior: 'smooth'});
  }
  return(
    <>
  <header className="bg-primary text-white text-center d-flex align-items-center justify-content-center" style={{ height: '100vh', backgroundImage: 'url(https://wallpapers.com/images/hd/travel-the-world-r6ao4m8c15q1ok3r.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <Container style={{
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // White background with 50% opacity
        padding: '20px', // Optional: adjust padding as needed
        borderRadius: '5px' // Optional: adjust border radius as needed
      }}>
      <Row>
        <Col style={{color:"black"}}>
          <h1 className="display-4 mb-4">Welcome to Smart City Travelling</h1>
          <p className="lead mb-4"></p>
          <Button variant="light" size="lg" onClick={handleLearnMore} style={{ marginRight: '20px' }}>Learn More</Button>
          <Button variant="light" size="lg" onClick={handleStart}>Get Started</Button>
        </Col>
      </Row>
    </Container>
  </header>
  </>
  );
};

const FeaturesSection = () => (
  <section id="learn" className="bg-light py-5">
    <Container>
      <Carousel style={{ backgroundColor: '#e0f7fa' }}>
        <Carousel.Item>
          <Card className="text-center" style={{ backgroundColor: '#b3e5fc', borderColor: '#81d4fa' ,height:"130px" }}>
            <Card.Body>
              <Card.Title>Personalized Travel Recommendations</Card.Title>
              <Card.Text>
                Users receive tailored destination suggestions based on their preferences and available time.
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className="text-center" style={{ backgroundColor: '#b3e5fc', borderColor: '#81d4fa' ,height:"130px"}}>
            <Card.Body>
              <Card.Title>Integration with Foursquare API</Card.Title>
              <Card.Text>
                Automatic place search and detailed information about destinations.
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className="text-center" style={{ backgroundColor: '#b3e5fc', borderColor: '#81d4fa' ,height:"130px"}}>
            <Card.Body>
              <Card.Title>Global Attraction Discovery</Card.Title>
              <Card.Text>
                Users can discover nearby attractions anywhere in the world.
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    </Container>
  </section>
);

export default LandingComponent;
