
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import axios from '../axiosSetup';
import { Link, useNavigate } from 'react-router-dom';

function SignupComponent() {

    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const[emsg,setemsg]=useState('');
  const[phmsg,setphmsg]=useState('');
  const[passmsg,setpassmsg]=useState('');
  const[phno,setPhno]=useState('');
  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
  
  //validation
  if (!username || !password || !email || !phno) {
    setMessage('All fields are required.');
    return;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(email)) {
    setemsg('Please enter a valid email address.');
    return;
}

const phonePattern = /^\d{10}$/;
if (!phonePattern.test(phno)) {
    setphmsg('Please enter a valid 10-digit phone number.');
    return;
}

if (password.length < 8) {
    setpassmsg('Password must be at least 8 characters long.');
    return;
}

    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        username,
        password,
        email,
        phno,
      });
      setMessage(response.data.message);
      alert(response.data.message);
      navigate('/login');
    } catch (error) {
      setMessage('Registration failed: ' + error.response.data.message);
      alert(error.response.data.message);
    }
};


    return (
        // <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
            <div className="d-flex align-items-center justify-content-center" style={{
                backgroundImage: 'url(https://wallpapercave.com/wp/wp4756926.jpg)',
               backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh'
            }}>
        
            
                <div className="col-md-5 p-5 bg-white rounded shadow" style={{ maxWidth: '500px'}}>
                    <div className="d-flex justify-content-between mb-3">
                        <h3 className="text-muted">Sign Up</h3>
                    </div>
                    <form>
                        <div className="form-group mb-3">
                            <label htmlFor="username" className="form-label">Name</label>
                            <input
                                onChange={(e) => setUsername(e.target.value)}
                                type="text"
                                id="username"
                                className="form-control"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="email" className="form-label">E-Mail</label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                id="email"
                                className="form-control"
                                placeholder="Enter your email"
                            />
                        </div>
                        <p className="text-danger">{emsg}</p>

                        <div className="form-group mb-4">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                id="password"
                                className="form-control"
                                placeholder="Enter your password"
                            />
                        </div>
                        <p className="text-danger">{passmsg}</p>

                        <div className="form-group mb-4">
                            <label htmlFor="phno" className="form-label">Phone No</label>
                            <input
                                onChange={(e) => setPhno(e.target.value)}
                                type="tel"
                                id="phno"
                                className="form-control"
                                placeholder="Enter your phone number"
                            />
                        </div>
                        <p className="text-danger">{phmsg}</p>

                        <button type="submit" onClick={handleSignup} className="btn btn-primary w-100">Sign Up</button>
                        <p className="mt-3">Already have an account? <Link to="/login" className="text-primary">Log In</Link></p>
                    </form>
                    <p className="text-center text-danger mt-2">{message}</p>
                </div>
            {/* </div> */}
         </div>
    );
}

export default SignupComponent;
