// import React, { useEffect, useState } from "react";
// import { Card } from "react-bootstrap";
// import { useParams } from "react-router-dom";

// function VenueComponent() {
//   const { id } = useParams();
//   const [formatAdd, setFormatAdd] = useState([]);
//   const [venue, setVenue] = useState(null); // Initialize venue as null to handle conditional rendering

//   useEffect(() => {
//     const handleVenue = async () => {
//       try {
//         const options = {
//           method: "GET",
//           headers: { accept: "application/json" },
//         };
//         const response = await fetch(
//           `https://api.foursquare.com/v2/venues/${id}/?v=20231010&oauth_token=BMC2LNSFZWM3M1J4TXF1T1FEK1DIFZ4E5F5CCAITN4HBB4NU`,
//           options
//         );
//         const data = await response.json();
//         const fetchedVenue = data.response.venue;
//         setVenue(fetchedVenue);

//         if (fetchedVenue && fetchedVenue.location && fetchedVenue.location.formattedAddress) {
//           setFormatAdd(fetchedVenue.location.formattedAddress);
//         }
//         console.log(data)
//         console.log(formatAdd)
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     handleVenue();
//   }, [id]); // Add id to dependency array to re-run if the id changes

//   return (
//     <>
//       <div className="d-flex justify-content-center align-items-center mt-5">
//         <Card className="mb-3" style={{ maxWidth: "800px" }}>
//           {venue && venue.bestPhoto ? (
//             <Card.Img
//               variant="top"
//               src={`${venue.bestPhoto.prefix}${venue.bestPhoto.height}x${venue.bestPhoto.width}${venue.bestPhoto.suffix}`}
//               style={{ height: "300px" , width:"500px" }} // Ensures proper image scaling
//             />
//           ) : (
//             <div
//               className="d-flex align-items-center justify-content-center"
//               style={{ height: "300px",width:"500px", backgroundColor: "#f0f0f0" }}
//             >
//               No Image Available
//             </div>
//           )}

//           <Card.Body>
//             <Card.Title className="d-flex justify-content-center align-items-center">
//               {venue ? venue.name : "Loading..."}
//             </Card.Title>
//             <Card.Text className="d-flex justify-content-center align-items-center">
//               {formatAdd.length > 0 ? formatAdd.join(", ") : "No address available"}
//             </Card.Text>
//           </Card.Body>
//         </Card>
//       </div>
//     </>
//   );
// }

// export default VenueComponent;
import React, { useEffect, useState } from "react";
import { Card, Accordion, Row, Col, Badge, OverlayTrigger, Tooltip, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar, FaThumbsUp, FaThumbsDown, FaClock } from "react-icons/fa";

function VenueComponent() {
  const { id } = useParams();
  const [venue, setVenue] = useState(null);
  const [formatAdd, setFormatAdd] = useState([]);

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
        console.log(fetchedVenue);
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

  // Loading component
  const LoadingComponent = () => {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "100vh" }}>
        <Spinner animation="border" role="status" variant="primary" style={{ width: '3rem', height: '3rem' }}>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <h3 className="mt-3" style={{ fontFamily: "Arial, sans-serif", fontWeight: "bold", color: "#007bff" }}>
          Loading, please wait...
        </h3>
        <p className="text-muted" style={{ animation: "fadeIn 1.5s infinite" }}>
          Fetching your venue details...
        </p>

        {/* CSS Animation */}
        <style>
          {`
            @keyframes fadeIn {
              0% { opacity: 0; }
              50% { opacity: 1; }
              100% { opacity: 0; }
            }
          `}
        </style>
      </div>
    );
  };

  if (!venue) {
    return <LoadingComponent />;
  }

  return (
    <div className="container mt-5">
      <Card className="mb-3 mx-auto" style={{ maxWidth: "800px" }}>
        <div className="text-center">
          {venue.photos?.groups[0]?.items[0] ? (
            <Card.Img
              variant="top"
              src={`${venue.photos.groups[0].items[0].prefix}${venue.photos.groups[0].items[0].width}x${venue.photos.groups[0].items[0].height}${venue.photos.groups[0].items[0].suffix}`}
              style={{ height: "400px", objectFit: "cover", width: "100%" }}
            />
          ) : (
            <div className="d-flex align-items-center justify-content-center bg-light" style={{ height: "400px", width: "100%" }}>
              No Image Available
            </div>
          )}
        </div>

        <Card.Body>
          <Card.Title className="text-center fs-3">{venue.name}</Card.Title>
          <Card.Text className="text-center fs-5">
            {formatAdd.length > 0 ? formatAdd.join(", ") : "No address available"}
          </Card.Text>

          <div className="d-flex justify-content-center my-3">
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Based on user ratings out of 5</Tooltip>}
            >
              <div className="d-flex align-items-center">
                {renderStars(venue.rating || 0)}
                <Badge
                  bg={
                    venue.rating > 8
                      ? "success"
                      : venue.rating > 5
                      ? "warning"
                      : "danger"
                  }
                  className="ms-3 fs-6"
                >
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
           

          <div className="mt-4">
            <strong>Photos:</strong>
            <Row className="mt-2">
              {venue.photos?.groups[0]?.items.map((photo, index) => (
                <Col md={6} className="mb-4" key={index}>
                  <img
                    src={`${photo.prefix}${photo.width}x${photo.height}${photo.suffix}`}
                    alt={`Clicked by ${photo.user.firstName} ${photo.user.lastName}`}
                    className="img-fluid rounded"
                    style={{ transition: 'transform 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <p className="text-center mt-2">
                    <small>
                      Photo by {photo.user.firstName} {photo.user.lastName}
                    </small>
                  </p>
                </Col>
              ))}
            </Row>
          </div>

        </Card.Body>
      </Card>
    </div>
  );
}

export default VenueComponent;

