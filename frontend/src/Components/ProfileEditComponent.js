import React, { useState, useEffect } from 'react';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const ProfileEditComponent = () => {
  const [formData, setFormData] = useState({ username: '', email: '' });
  const [user, setUser] = useState(null); // Initialize as null
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const token = localStorage.getItem('token'); // Get token once

  // Fetch user data from localStorage and API
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (!storedUser || !storedUser._id) {
          throw new Error('User data is not available.');
        }
        setUser(storedUser); // Set the user state

        const response = await axios.get(`http://localhost:5000/api/user/${storedUser._id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setFormData(response.data); // Set form data with API response
      } catch (err) {
        setError(err.message || 'Failed to load user details.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email) {
      setError('Both username and email are required.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email.');
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:5000/api/user/${user._id}`,
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // Update localStorage with the new user data
      const updatedUser = { ...user, ...response.data };
      localStorage.setItem('user', JSON.stringify(updatedUser));

      setUser(updatedUser); // Update state with the new user data
      setSuccess('Profile updated successfully!');
      setError('');
    } catch (err) {
      setError('Failed to update profile.');
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: '100vh',
        backgroundImage: 'url(/profileedit.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="bg-white p-4 rounded shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <h1 className="text-muted mb-4 text-center">Edit Your Profile</h1>

        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}

        {loading ? (
          <div className="d-flex justify-content-center">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Save Changes
            </Button>
          </Form>
        )}
      </div>
    </div>
  );
};

export default ProfileEditComponent;
