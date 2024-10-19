import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

function VenueComponent() {
  const { id } = useParams();
  const [formatAdd, setFormatAdd] = useState([]);
  const [venue, setVenue] = useState(null); // Initialize venue as null to handle conditional rendering

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
        console.log(formatAdd)
      } catch (err) {
        console.log(err);
      }
    };
    handleVenue();
  }, [id]); // Add id to dependency array to re-run if the id changes

  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <Card className="mb-3" style={{ maxWidth: "800px" }}>
          {venue && venue.bestPhoto ? (
            <Card.Img
              variant="top"
              src={`${venue.bestPhoto.prefix}${venue.bestPhoto.height}x${venue.bestPhoto.width}${venue.bestPhoto.suffix}`}
              style={{ height: "300px" , width:"500px" }} // Ensures proper image scaling
            />
          ) : (
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ height: "300px",width:"500px", backgroundColor: "#f0f0f0" }}
            >
              No Image Available
            </div>
          )}

          <Card.Body>
            <Card.Title className="d-flex justify-content-center align-items-center">
              {venue ? venue.name : "Loading..."}
            </Card.Title>
            <Card.Text className="d-flex justify-content-center align-items-center">
              {formatAdd.length > 0 ? formatAdd.join(", ") : "No address available"}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default VenueComponent;
