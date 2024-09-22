// src/Components/SearchPage.js
import React, { useState,useEffect } from 'react';
import { Container, Row, Col, Form, Button,Card,Carousel} from "react-bootstrap";
import { FaSearch } from 'react-icons/fa';
import './test.css';
import {useAuth} from './AuthProvider'
import axios from '../axiosSetup';

const SearchComponent = () => {
  const {city}=useAuth();
  // console.log(city);

  const [interests, setInterests] = useState('');
  const [interestsid,setInterestsId]=useState('');
  const [time, setTime] = useState('');
  const [radius, setRadius] = useState('');
  const [categories1,setCategories]=useState([])
  const [categoryMap1,setCategoryMap]=useState({})
  const [categoryNames, setCategoryNames] = useState([]);
  const[latitude,setLatitude]=useState();
  const[longitude,setLongitude]=useState();
  const [cityurl,setCityurl]=useState('');
  const [cityname,setCityname]=useState('');
  const [citydes,setCitydes]=useState('');
  useEffect(()=>{
    // handleCategory();
    const handleCategory = async () => {
      try{
        const options = {method: 'GET', headers: {accept: 'application/json'}};
        const response = await fetch('https://api.foursquare.com/v2/venues/categories?v=20231010&oauth_token=BMC2LNSFZWM3M1J4TXF1T1FEK1DIFZ4E5F5CCAITN4HBB4NU', options);
        const data = await response.json(); 
        setCategories(data.response.categories);       
      //  console.log(categories1);
      const names = data.response.categories.map((category) => category.name);
      setCategoryNames(names);
      // const codes = data.response.categories.map((category) => category.categoryCode);
      // setCategoryCode(codes);
      // console.log(categoryCode);
      const categoryMap = new Map();
      data.response.categories.forEach((category) => {
        categoryMap.set(category.name, category.categoryCode);
      });
      setCategoryMap(categoryMap);
      //console.log(categoryMap)
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
        setCityurl(data.message.imgUrl) 
        setCityname(data.message.name)
        setCitydes(data.message.description) 
      }
      catch(err){
        console.log(err)
      }
    };
    handleCity();
  },[cityurl,cityname,citydes])
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

  // const handleSearch = async() => {
  //   try{
  //     const options = {method: 'GET', headers: {accept: 'application/json'}};
  //     setRadius(Number(radius*10000))
  //     const response=await fetch(`https://api.foursquare.com/v2/search/recommendations?v=20231010&ll=${latitude}%2C${longitude}&radius=${radius}&categoryId=${interests}&oauth_token=BMC2LNSFZWM3M1J4TXF1T1FEK1DIFZ4E5F5CCAITN4HBB4NU`, options)
  //     const data=await response.json()
  //     console.log(data)
  //     console.log({ interests, time, radius });
  //   }
  //   catch(err){
  //     console.log(err);
  //   }

  // }
  const handleSearch = async() => {
    try{
    const options = {method: 'GET', headers: {accept: 'application/json'}};
    let url=`https://api.foursquare.com/v2/search/recommendations?v=20231010&ll=${latitude}%2C${longitude}&radius=${radius*10000}&categoryId=${interestsid}&oauth_token=BMC2LNSFZWM3M1J4TXF1T1FEK1DIFZ4E5F5CCAITN4HBB4NU`
    const response=await fetch(url,options)
    const data=await response.json();
    console.log(data.response.group.results)
    }
    catch(err){
      console.error('Error fetching data:');
    }
    console.log({ interests, time, radius });
  }


  return (
    <Container className="mt-5">

 <Row className="mb-5" style={{ border: '2px solid #e0e0e0', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)' }}>
  <Col md={7} className="p-3">
    <img 
      src={cityurl} 
      alt="City" 
      className="img-fluid" 
      style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'cover' }} 
    />
    </Col> 
    <Col md={5} className='p-3'>
      <Row className="d-flex align-items-center">
        <h1 className="mb-3" style={{ fontWeight: '700', fontSize: '2rem', color: '#343a40' }}>{cityname}</h1>
      </Row>
      <Row className="d-flex align-items-center">
        <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.5' }}>{citydes}</p>
      </Row>
    </Col>
  
</Row>

{/* <Row className="mb-5 align-items-center">
        <Col md={5} className="d-flex justify-content-center">
          <img 
            src={cityurl} 
            alt="City" 
            className="img-fluid rounded shadow-lg" 
            style={{ width: '100%', height: 'auto', maxHeight: '400px' }} 
          />
        </Col>
        <Col md={7} className="d-flex flex-column justify-content-center">
          <div className="city-info">
            <h1 className="mb-3 text-dark">{cityname}</h1>
            <p className="text-muted">{citydes}</p>
          </div>
        </Col>
      </Row> */}



      <Row className="mb-4">
        <Col>
          <Form>
            <Row>
              {/* <Col md={6} className="mb-3">
                 <Form.Group controlId="formLocation">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </Form.Group> 
              </Col> */}
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
                  <Form.Control as="select" value={interests} placeholder='Select a category' onChange={(e) => {
                    e.preventDefault();
                    setInterests(e.target.value);
                    setInterestsId(categoryMap1.get(e.target.value))}}>
                  <option value="">Select a category</option>
                   {categoryNames.map((name, index) => (
                    <option key={index} value={name}>{name}</option>))}
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
                    onChange={(e) => {
                      e.preventDefault();
                      setTime(e.target.value)}}
                  />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group controlId="formRadius">
                  <Form.Label>Radius (km in 10000)</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter search radius in kilometers"
                    min='0'
                    value={radius}
                    onChange={(e) => {
                      e.preventDefault();
                      setRadius(e.target.value)}}
                  />
                </Form.Group>
              </Col>
              <Col className="text-center">
                <Button variant="primary" onClick={handleSearch}>
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

