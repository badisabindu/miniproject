// src/Components/SearchPage.js
import React, { useState,useEffect } from 'react';
import { Container, Row, Col, Form, Button,} from "react-bootstrap";
//import {Card, Carousel } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import './test.css';
import {useAuth} from './AuthProvider'

import axios from '../axiosSetup';

const SearchComponent = () => {
  const {city}=useAuth();
  // console.log(city);

  const [interests, setInterests] = useState('');
  const [time, setTime] = useState('');
  const [radius, setRadius] = useState('');
  const [categories1,setCategories]=useState([])
  const [categoryNames, setCategoryNames] = useState([]);
  const[latitude,setLatitude]=useState();
  const[longitude,setLongitude]=useState();
  const [cityurl,setCityurl]=useState('');
  useEffect(()=>{
    // handleCategory();
    const handleCategory = async () => {
      try{
        const options = {method: 'GET', headers: {accept: 'application/json'}};
        const response = await fetch('https://api.foursquare.com/v2/venues/categories?v=20231010&oauth_token=BMC2LNSFZWM3M1J4TXF1T1FEK1DIFZ4E5F5CCAITN4HBB4NU', options);
        const data = await response.json(); 
        setCategories(data.response.categories);       
       console.log(data.response.categories);
      const names = data.response.categories.map((category) => category.name);
      setCategoryNames(names);
      console.log(categoryNames);
      }
      catch(err){
        console.log(err)
      }
    };
    handleCategory();
  },[])
  useEffect(()=>{
    const handleCity = async () => {
      try{
        const response = await fetch(`http://localhost:5000/cities/${city}`);
        const data = await response.json(); 
        // console.log(data.message.imgUrl);
        setCityurl(data.message.imgUrl) 
        // console.log(cityurl);
      }
      catch(err){
        console.log(err)
      }
    };
    handleCity();
  },[cityurl])
  useEffect(()=>{
    const handleLatLon = async () => {
      try{
        const response=await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=b3f054ec1f60b1b06775dd88f8468dbb`)
        const data = await response.json();
      setLatitude(data[0].lat);
      setLongitude(data[0].lon);
        // console.log(latitude,longitude)

      }
      catch(err){
        console.log(err);
      }
    }
    handleLatLon();
  },[latitude,longitude])

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    //console.log({ location, interests, time, radius });
  }


  

  return (
    <Container className="mt-5">
      <Row className="mb-4">
      <img src={cityurl}></img>
        <Col>
          <h1 className="text-center mb-4">Find Your Next Adventure</h1>
          <Form onSubmit={handleSearch}>
            <Row>
              <Col md={6} className="mb-3">
                {/* <Form.Group controlId="formLocation">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </Form.Group> */}
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
    // onClick={handleCategory}
  >
          <option value="">Select a category</option>
          {categoryNames.map((name, index) => (
            <option key={index} value={name}>{name}</option>
          ))}
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

