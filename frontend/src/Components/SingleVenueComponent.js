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
import { Card, ProgressBar, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { FaThumbsUp, FaThumbsDown, FaClock } from "react-icons/fa";

function VenueComponent() {
  const { id } = useParams();
  const [venue, setVenue] = useState(null);
  const [formatAdd, setFormatAdd] = useState([]);

  useEffect(() => {
    const handleVenue = async () => {
      try {
        const options = {
          method: "GET",
          headers: { accept: "application/json" },
        };
        const response = await fetch(
          `https://api.foursquare.com/v2/venues/${id}/?v=20231010&oauth_token=BMC2LNSFZWM3M1J4TXF1T1FEK1DIFZ4E5F5CCAITN4HBB4NU`,
          options
        );
        const data = await response.json();
        const fetchedVenue = data.response.venue;
        setVenue(fetchedVenue);

        if (fetchedVenue && fetchedVenue.location && fetchedVenue.location.formattedAddress) {
          setFormatAdd(fetchedVenue.location.formattedAddress);
        }
      } catch (err) {
        console.log(err);
      }
    };
    handleVenue();
  }, [id]);

  if (!venue) {
    return <div>Loading...</div>;
  }

  // Function to format timeframes
  const renderTimeFrames = () => {
    if (venue.popular && venue.popular.timeframes) {
      return venue.popular.timeframes.map((timeframe, index) => (
        <div key={index} className="d-flex align-items-center mb-2">
          <FaClock className="me-2" /> {/* Adding clock icon */}
          <strong>{timeframe.days}:</strong>
          {timeframe.open.map((time, idx) => (
            <span key={idx} className="ms-2">{time.renderedTime}</span>
          ))}
        </div>
      ));
    }
    return <div>No time frames available</div>;
  };

  // Function to render photos in a grid
  const renderPhotos = () => {
    if (venue.photos && venue.photos.groups[0] && venue.photos.groups[0].items.length > 0) {
      return (
        <Row className="mt-4">
          {venue.photos.groups[0].items.map((photo, index) => (
            <Col md={6} className="mb-4" key={index}>
              <img
                src={`${photo.prefix}${photo.width}x${photo.height}${photo.suffix}`}
                alt={`Photo by ${photo.user.firstName} ${photo.user.lastName}`}
                className="img-fluid rounded" // Bootstrap classes for responsive image and rounded corners
              />
              <p className="text-center mt-2">
                <small>Photo by {photo.user.firstName} {photo.user.lastName}</small>
              </p>
            </Col>
          ))}
        </Row>
      );
    }
    return <div>No photos available</div>;
  };

  return (
    <div className="container mt-5">
      <Card className="mb-3 mx-auto" style={{ maxWidth: "800px" }}>
        {/* Displaying Venue Image in Center */}
        <div className="text-center">
          {venue.photos && venue.photos.groups[0] && venue.photos.groups[0].items[0] ? (
            <Card.Img
              variant="top"
              src={`${venue.photos.groups[0].items[0].prefix}${venue.photos.groups[0].items[0].width}x${venue.photos.groups[0].items[0].height}${venue.photos.groups[0].items[0].suffix}`}
              style={{ height: "400px", objectFit: "cover", width: "100%" }}
            />
          ) : (
            <div
              className="d-flex align-items-center justify-content-center bg-light"
              style={{ height: "400px", width: "100%" }}
            >
              No Image Available
            </div>
          )}
        </div>

        <Card.Body>
          {/* Displaying Venue Name */}
          <Card.Title className="text-center fs-3">{venue.name}</Card.Title>

          {/* Displaying Venue Address */}
          <Card.Text className="text-center fs-5">
            {formatAdd.length > 0 ? formatAdd.join(", ") : "No address available"}
          </Card.Text>

          {/* Displaying Likes, Dislikes, and Rating */}
          <div className="d-flex justify-content-around my-3">
            <div className="d-flex align-items-center">
              <FaThumbsUp className="me-2" /> <strong>Likes: </strong> {venue.likes ? venue.likes.count : 0}
            </div>
            <div className="d-flex align-items-center">
              <FaThumbsDown className="me-2" /> <strong>Dislikes: </strong> {venue.dislike ? "Disliked" : "No dislikes"}
            </div>
            <div className="d-flex align-items-center">
              <strong>Rating: </strong> {venue.rating ? venue.rating : "No rating available"}
            </div>
          </div>

          {/* Displaying Rating Progress Bar */}
          {venue.rating && (
            <ProgressBar
              now={venue.rating * 10}
              label={`${venue.rating}/10`}
              variant={venue.rating > 7 ? "success" : venue.rating > 4 ? "warning" : "danger"}
              className="my-3"
            />
          )}

          {/* Displaying Time Frames */}
          <div className="my-4">
            <strong>Opening Hours:</strong>
            {venue.popular && venue.popular.isOpen ? " Open Now" : " Closed"}
            <div className="mt-2">{renderTimeFrames()}</div>
          </div>

          {/* Displaying Photos */}
          <div className="mt-4">
            <strong>Photos:</strong>
            {renderPhotos()}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default VenueComponent;
