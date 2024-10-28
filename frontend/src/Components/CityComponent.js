import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card, Carousel, Spinner } from 'react-bootstrap';
import { FaSearch, FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useAuth } from './AuthProvider.js';

const cities = [
  {
    value: "Hyderabad",
    label: "Hyderabad",
    image: require('../assets/images/Hyderabad.jpg'),  
    description: "Explore the rich history and vibrant culture of Hyderabad."
  },
  {
    value: "Delhi",
    label: "Delhi",
    image: require('../assets/images/Delhi.webp'),  
    description: "Experience the bustling city life and historical landmarks of Delhi."
  },
  {
    value: "Chennai",
    label: "Chennai",
    image: require('../assets/images/Chennai.jpg'),  
    description: "Chennai is well known for its cultural and historic sites."
  },
  {
    value: "Bangalore",
    label: "Bangalore",
    image: require('../assets/images/Bangalore.jpg'),  
    description: "Explore the IT hub and vibrant culture of Bangalore."
  },
  {
    value: "Jaipur",
    label: "Jaipur",
    image: require('../assets/images/Jaipur.jpg'),  
    description: "Discover the palaces and heritage of Jaipur."
  },
  {
    value: "Mumbai",
    label: "Mumbai",
    image: require('../assets/images/Mumbai.jpg'),  
    description: "Discover the lively spirit and entertainment hub of Mumbai."
  },
  {
    value: "Kerala",
    label: "Kerala",
    image: require('../assets/images/Kerala.jpg'),  
    description: "Kerala, India, is a tropical paradise."
  },
  {
    value: "Jammu",
    label: "Jammu",
    image: require('../assets/images/Jammu.avif'),  
    description: "Enjoy the serene beauty and picturesque landscapes of Kashmir."
  }
];

const bannerImage = require('../assets/images/banner.avif'); 

function CityComponent() {
  const { city, setCity } = useAuth();
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    const loadImages = async () => {
      try {
        const imagePromises = cities.map((city) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = city.image;
            img.onload = () => {
              setLoadedImages(prev => ({
                ...prev,
                [city.value]: city.image
              }));
              resolve();
            };
            img.onerror = reject;
          });
        });

        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Error loading images:", error);
        setImagesLoaded(true); // Still set to true to show fallback images
      }
    };

    loadImages();
  }, []);

  const handleCity = async (cityName) => {
    setCity(cityName);
    navigate('/search');
  };

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const styles = {
    heroSection: {
      textAlign: 'center',
      padding: '3rem 0',
      background: 'linear-gradient(to right, #f8f9fa, #e9ecef)',
      borderRadius: '15px',
      marginBottom: '2rem'
    },
    bannerImage: {
      width: '100%',
      height: '400px',
      objectFit: 'cover',
      borderRadius: '15px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    },
    card: {
      transition: 'transform 0.3s ease-in-out',
      cursor: 'pointer',
      height: '100%',
      borderRadius: '10px',
      overflow: 'hidden',
      border: 'none',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    },
    cardImage: {
      height: '200px',
      objectFit: 'cover',
      backgroundColor: '#f8f9fa' // Placeholder background while loading
    },
    cardTitle: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem'
    },
    cardText: {
      fontSize: '0.9rem',
      color: '#6c757d'
    },
    searchButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      backgroundColor: '#007bff',
      border: 'none',
      padding: '0.5rem 1.5rem',
      borderRadius: '8px',
      transition: 'background-color 0.3s ease'
    },
    loadingSpinner: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '200px'
    }
  };

  if (!imagesLoaded) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <h1 className="display-4 mb-4">Find Your Next Adventure</h1>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form className="d-flex gap-3 justify-content-center align-items-end">
              <Form.Group className="flex-grow-1">
                <Form.Select 
                  value={city} 
                  onChange={(e) => setCity(e.target.value)}
                  className="form-select-lg"
                >
                  <option value="">Select location</option>
                  {cities.map(city => (
                    <option key={city.value} value={city.value}>
                      {city.label}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Button 
                style={styles.searchButton}
                onClick={() => handleCity(city)}
                disabled={!city}
              >
                <FaMapMarkerAlt /> Search
              </Button>
            </Form>
          </Col>
        </Row>
      </div>

      {/* Banner Image */}
      <Row className="mb-5">
        <Col>
          <img 
            src={bannerImage}
            alt="Travel banner"
            style={styles.bannerImage}
          />
        </Col>
      </Row>

      {/* Popular Destinations */}
      <h2 className="mb-4">Popular Destinations</h2>
      <Carousel 
        activeIndex={index} 
        onSelect={handleSelect}
        indicators={false}
        interval={null}
      >
        {[0, 1].map((page) => (
          <Carousel.Item key={page}>
            <Row>
              {cities.slice(page * 4, (page + 1) * 4).map((city) => (
                <Col md={3} key={city.value} className="mb-4">
                  <Card 
                    style={styles.card}
                    onClick={() => handleCity(city.value)}
                    className="h-100"
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <Card.Img 
                      variant="top" 
                      src={loadedImages[city.value] || city.image}
                      style={styles.cardImage}
                      alt={city.label}
                    />
                    <Card.Body>
                      <Card.Title style={styles.cardTitle}>{city.label}</Card.Title>
                      <Card.Text style={styles.cardText}>
                        {city.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default CityComponent;