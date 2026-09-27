import { useState } from "react";
import {useNavigate, Link} from "react-router-dom";
import api from "../api/axios";
import './Register.css';




export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [success, setSuccess] = useState('');


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await api.post('api/auth/register', formData);
      setSuccess('Registration successful! Redirecting to login...');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    } 
  };

  return (
    <div className="registerContainer">
      <form onSubmit={handleSubmit} className="registerForm">
        <h2 className="registerName">Create Account</h2>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="inputField"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="inputField"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="inputField"
          required
        />
          
        <button type="submit" className="submitButton">Register</button>

        <p className="loginLink">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </form>
    </div>
  );
}