import React, { useEffect, useState } from "react";
import { Card, Accordion, Badge, OverlayTrigger, Tooltip, Spinner, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar, FaThumbsUp, FaThumbsDown, FaClock } from "react-icons/fa";
import MapComponent from './MapComponent'; // Ensure this import is correct

function VenueComponent() {
  const { id } = useParams();
  const [venue, setVenue] = useState(null);
  const [formatAdd, setFormatAdd] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    const handleVenue = async () => {
      try {
        const options = { method: "GET", headers: { accept: "application/json" } };
        const response = await fetch(
          `https://api.foursquare.com/v2/venues/${id}/?v=20231010&oauth_token=BMC2LNSFZWM3M1J4TXF1T1FEK1DIFZ4E5F5CCAITN4HBB4NU`,
          options
        );
        const data = await response.json();
        const fetchedVenue = data.response.venue;
        setVenue(fetchedVenue);

        if (fetchedVenue?.location?.formattedAddress) {
          setFormatAdd(fetchedVenue.location.formattedAddress);
        }
      } catch (err) {
        console.log(err);
      }
    };
    handleVenue();
  }, [id]);

  const LoadingComponent = () => {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "100vh", backgroundColor: "#f8f9fa" }}>
        <Spinner animation="border" role="status" variant="primary" style={{ width: '3rem', height: '3rem' }}>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <h3 className="mt-3" style={{ fontFamily: "Arial, sans-serif", fontWeight: "bold", color: "#007bff" }}>
          Loading, please wait...
        </h3>
      </div>
    );
  };

  const renderStars = (rating) => {
    const stars = [];
    const scaledRating = rating / 2; // Convert rating to a scale of 5
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(scaledRating)) {
        stars.push(<FaStar key={i} className="me-1 text-warning" />);
      } else if (i - 0.5 === scaledRating) {
        stars.push(<FaStarHalfAlt key={i} className="me-1 text-warning" />);
      } else {
        stars.push(<FaRegStar key={i} className="me-1 text-muted" />);
      }
    }
    return stars;
  };

  const renderTimeFrames = () => {
    if (venue.popular?.timeframes) {
      return (
        <Accordion defaultActiveKey="0" className="mt-3">
          {venue.popular.timeframes.map((timeframe, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>
                <FaClock className="me-2" /> {timeframe.days}
              </Accordion.Header>
              <Accordion.Body>
                {timeframe.open.map((time, idx) => (
                  <div key={idx} className="ms-2">
                    <FaClock className="me-2" />
                    {time.renderedTime}
                  </div>
                ))}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      );
    }
    return <div>No time frames available</div>;
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage('');
  };

  if (!venue) {
    return <LoadingComponent />;
  }

  return (
    <div className="container mt-5" style={{ backgroundColor: "#ffffff", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
      <div className="d-flex flex-column">
        {/* Row for Map and Main Photo */}
        <div className="d-flex mb-3">
          {/* Map Component */}
          <div className="flex-fill me-3" style={{ flex: "1 1 60%", minHeight: "400px" }}>
            <MapComponent 
              latitude={venue.location.lat} 
              longitude={venue.location.lng} 
              venueName={venue.name} 
              style={{ borderRadius: "10px", overflow: "hidden", transition: "transform 0.2s" }} 
              className="hover-zoom" 
            />
          </div>

          {/* Main Photo */}
          <div style={{ flex: "1 1 40%", minHeight: "400px" }}>
            <Card style={{ borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.2)" }}>
              <div className="text-center">
                {venue.photos?.groups[0]?.items[0] ? (
                  <Card.Img
                    variant="top"
                    src={`${venue.photos.groups[0].items[0].prefix}${venue.photos.groups[0].items[0].width}x${venue.photos.groups[0].items[0].height}${venue.photos.groups[0].items[0].suffix}`}
                    style={{ height: "400px", objectFit: "cover", width: "100%", borderRadius: "10px 10px 0 0" }}
                  />
                ) : (
                  <div className="d-flex align-items-center justify-content-center bg-light" style={{ height: "400px", width: "100%", borderRadius: "10px 10px 0 0" }}>
                    No Image Available
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>

        {/* Venue Details */}
        <Card className="mb-3" style={{ borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.2)" }}>
          <Card.Body>
            <Card.Title className="text-center fs-3">{venue.name}</Card.Title>
            <Card.Text className="text-center fs-5">
              {formatAdd.length > 0 ? formatAdd.join(", ") : "No address available"}
            </Card.Text>

            <div className="d-flex justify-content-center my-3">
              <OverlayTrigger placement="top" overlay={<Tooltip>Based on user ratings out of 5</Tooltip>}>
                <div className="d-flex align-items-center">
                  {renderStars(venue.rating || 0)}
                  <Badge bg={venue.rating > 8 ? "success" : venue.rating > 5 ? "warning" : "danger"} className="ms-3 fs-6">
                    {venue.rating ? (venue.rating / 2).toFixed(1) : "N/A"} / 5
                  </Badge>
                </div>
              </OverlayTrigger>
            </div>

            <div className="d-flex justify-content-around my-3">
              <div className="d-flex align-items-center">
                <FaThumbsUp className="me-2 text-success" />
                <strong>Likes: </strong> {venue.likes?.count || 0}
              </div>
              <div className="d-flex align-items-center">
                <FaThumbsDown className="me-2 text-danger" />
                <strong>Dislikes: </strong> {venue.dislike ? "Disliked" : "No dislikes"}
              </div>
            </div>

            <div className="my-4">
              <strong>Opening Hours:</strong>
              {venue.popular?.isOpen ? " Open Now" : " Closed"}
              {renderTimeFrames()}
            </div>

            {/* Grid Layout for Photos */}
            <div className="mt-4">
              <strong>Photos:</strong>
              <div className="photo-grid">
                {venue.photos?.groups[0]?.items.map((photo, index) => (
                  <div key={index} className="photo-item">
                    <img
                      src={`${photo.prefix}300x300${photo.suffix}`}
                      alt={`Clicked by ${photo.user.firstName} ${photo.user.lastName}`}
                      className="img-fluid rounded"
                      style={{ width: "100%", height: "auto", objectFit: "cover", borderRadius: "10px" }}
                      onClick={() => handleImageClick(`${photo.prefix}original${photo.suffix}`)} // Open modal on click
                    />
                    <p className="text-center mt-2">
                      <small>
                        Photo by {photo.user.firstName} {photo.user.lastName}
                      </small>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>

      {/* Modal for Enlarged Image */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <img
            src={selectedImage}
            alt="Enlarged"
            className="img-fluid"
            style={{ maxHeight: "80vh", maxWidth: "100%" }}
          />
        </Modal.Body>
      </Modal>

      {/* CSS for the Fixed Grid Layout */}
      <style jsx="true">{`
        .photo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }

        .photo-item img {
          border-radius: 10px;
          transition: transform 0.3s ease;
        }

        .photo-item img:hover {
          cursor: pointer; /* Change cursor to pointer on hover */
        }
      `}</style>
    </div>
  );
}

export default VenueComponent;
