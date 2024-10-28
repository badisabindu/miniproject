import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Container, Spinner, Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles

const VenuesComponent = () => {
  const { lat, long, r, catId } = useParams();
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [sortOption, setSortOption] = useState("none"); // Default to no sorting
  const [sortedVenues, setSortedVenues] = useState([]); // State for sorted venues
  const navigate = useNavigate();

  useEffect(() => {
    fetchVenueData();
  }, []);

  useEffect(() => {
    // Initially set sortedVenues to the original venues
    setSortedVenues(venues);
  }, [venues]);

  const fetchVenueData = async () => {
    setLoading(true); // Start loading
    try {
      const options = { method: "GET", headers: { accept: "application/json" } };
      let url = `https://api.foursquare.com/v2/search/recommendations?v=20231010&ll=${lat}%2C${long}&radius=${r * 10000}&categoryId=${catId}&oauth_token=BMC2LNSFZWM3M1J4TXF1T1FEK1DIFZ4E5F5CCAITN4HBB4NU`;
      const response = await fetch(url, options);
      const data = await response.json();
      setVenues(data.response.group.results); // Set venues without sorting
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false); // End loading
    }
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value); // Set the sort option based on user selection
  };

  const handleSortSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    let sorted;

    // Apply sorting based on selected option
    if (sortOption === "popularity") {
      sorted = [...venues].sort((a, b) => {
        const popularityA = a.venue.popularity || 0;
        const popularityB = b.venue.popularity || 0;
        return popularityB - popularityA; 
      });
    } else if (sortOption === "rating") {
      sorted = [...venues].sort((a, b) => {
        const ratingA = a.venue.rating || 0;
        const ratingB = b.venue.rating || 0;
        return ratingB - ratingA; 
      });
    } else {
      sorted = venues;
    }

    setSortedVenues(sorted); 
  };

  const handleSingleVenue = (id) => {
    try {
      navigate(`/venue/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  // Loading component
  const LoadingComponent = () => {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "100vh" }}>
        <Spinner animation="border" role="status" variant="primary" style={{ width: '3rem', height: '3rem' }}>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <h3 className="mt-3">Loading venues, please wait...</h3>
      </div>
    );
  };

  if (loading) {
    return <LoadingComponent />; // Display loading component while fetching data
  }

  return (
    <Container>
     <div className="d-flex justify-content-end mt-3 mb-3">
      {/* Sorting Form */}
      <Form inline onSubmit={handleSortSubmit} className="d-flex">
        <Form.Group controlId="formSort" className="mr-2">
          <Form.Select value={sortOption} onChange={handleSortChange} aria-label="Sort venues">
            <option value="none">No Sorting</option>
            <option value="popularity">Sort by Popularity</option>
            <option value="rating">Sort by Rating</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit" variant="primary" className="mx-4">Sort</Button>
      </Form>
    </div>


      <div className="d-flex flex-wrap justify-content-center mt-4">
        {sortedVenues.map((venue, index) => (
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
              {venue.venue.rating && (
                <Card.Text className="text-center text-success">
                  Rating: {venue.venue.rating}
                </Card.Text>
              )}
              {venue.venue.popularity && (
                <Card.Text className="text-center text-warning">
                  Popularity: {venue.venue.popularity}
                </Card.Text>
              )}
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default VenuesComponent;
