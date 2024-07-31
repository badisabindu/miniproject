
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import React, { useState } from 'react';
import axios from '../axiosSetup';

function SignupComponent() {

    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        username,
        password,
        email,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Registration failed: ' + error.response.data.message);
    }
};


    return (
        <>
            <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
                
                    <div className="col-md-7 d-none d-md-flex align-items-center justify-content-center bg-primary text-white p-0">
                        <div className="w-100 h-100 d-flex flex-row align-items-center justify-content-center text-center" style={{ backgroundImage: `url(${'https://wallpapercave.com/wp/wp4756926.jpg'})`, backgroundSize: 'cover', backgroundPosition: 'center' ,padding:'300px'}}>
                            <h1 className="mb-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px', borderRadius: '10px' }}>Smart City</h1>
                        </div>
                    
                    </div>
                    
                    <div className="col-md-5 p-5 bg-white">
                        <div className="d-flex justify-content-between mb-3">
                            <h3 className="text-muted">Sign Up</h3>
                            
                        </div>
                        <form>
                        <div className="form-group mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input onChange={(e) => setUsername(e.target.value)} type="name" id="username" className="form-control" placeholder="Enter your name" />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="email" className="form-label">E-Mail</label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" className="form-control" placeholder="Enter your email" />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" className="form-control" placeholder="Enter your password" />
                            </div>
                            <button type="submit" onClick={handleSignup} className="btn btn-primary w-100">Sign Up</button>
                            Already have an account? <Link to="/" className="text-primary">Log In</Link>
                        </form>
                        <p>{message}</p>
                    </div>
                    
                </div>
            
        </>
    );
}

export default SignupComponent;
