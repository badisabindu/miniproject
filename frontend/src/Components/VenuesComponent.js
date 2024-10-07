import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles

const VenuesComponent = () => {
  const { lat, long, r, catId } = useParams();
  const [venues, setVenues] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchVenueData();
  }, []);

  const fetchVenueData = async () => {
    try {
      const options = { method: "GET", headers: { accept: "application/json" } };
      let url = `https://api.foursquare.com/v2/search/recommendations?v=20231010&ll=${lat}%2C${long}&radius=${
        r * 10000
      }&categoryId=${catId}&oauth_token=BMC2LNSFZWM3M1J4TXF1T1FEK1DIFZ4E5F5CCAITN4HBB4NU`;
      const response = await fetch(url, options);
      const data = await response.json();
      setVenues(data.response.group.results);
      console.log(venues);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSingleVenue = async (id) => {
    try {
      navigate(`/venue/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Container
        className="d-flex flex-wrap justify-content-center mt-4" // Bootstrap utility classes for flex and spacing
      >
        {venues.map((venue, index) => (
          <Card
            className="product-card m-3 shadow-sm" // Additional margin and shadow for Bootstrap styling
            key={index}
            style={{ width: "18rem" }}
          >
            {venue.photo ? (
              <Card.Img
                variant="top"
                src={`${venue.photo.prefix}${venue.photo.height}x${venue.photo.width}${venue.photo.suffix}`}
                style={{ height: "250px", objectFit: "cover" }} // Ensures proper image scaling
                onClick={() => handleSingleVenue(venue.venue.id)}
              />
            ) : (
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ height: "250px", backgroundColor: "#f0f0f0" }}
                onClick={() => handleSingleVenue(venue.venue.id)}
              >
                No Image Available
              </div>
            )}
            <Card.Body>
              <Card.Title className="text-center">{venue.venue.name}</Card.Title>
              <Card.Text className="text-center">{venue.venue.location.address}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default VenuesComponent;
