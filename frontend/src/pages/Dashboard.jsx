import {useState} from 'react';
import Navbar from '../components/Navbar';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';


export default function Dashboard() {
  const [profile, setProfile] = useState({
    category: '',
    businessType: '',
    income: '',
    location: '',
    age: '',
    gender: '',
    state: '',

  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await api.post('/schemes/match', profile);
      navigate('/results', { state: { schemes: response.data.schemes } });
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch schemes');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboardContainer">
     
      <div className="profileFormContainer">
      <h2 className="profileFormTitle">Profile Information</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit} className="profileForm">
        <div className="formGroup">
          <label className="formLabel">Category:</label>
          <select name="category" value={profile.category} onChange={handleChange} className="formSelect" required>
            <option value="">Select Category</option>
            <option value="SC">SC</option>
            <option value="ST">ST</option>
            <option value="OBC">OBC</option>
            <option value="General">General</option>
          </select>
        </div>

        <div>
          <label className="formLabel" >Business Type:</label>
          <input type="text" name="businessType" 
          placeholder="Enter business type" 
          value={profile.businessType}
          onChange={handleChange} 
          className="formInput" 
          required
        />
        </div>

        <div>
          <label className="formLabel">Income:</label>
          <input type="number" name="income" 
          placeholder="Enter income"
          value={profile.income}
          onChange={handleChange} 
          className="formInput" 
          required
        />

        </div>

        <div>
          <label className="formLabel">Location:</label>
          <input type="text"
           name="location" 
          placeholder="Enter location"
          value={profile.location}
          onChange={handleChange} 
          className="formInput" 
          required
        />
        </div>

        <div>
          <label className="formLabel">Age:</label>
          <input type="number" name="age" 
          placeholder="Enter age"
          value={profile.age}
          onChange={handleChange} 
          className="formInput" 
          required
        />
        </div>
        <div>
          <label className="formLabel">Gender:</label>
          <select name="gender" value={profile.gender} onChange={handleChange} className="formSelect" required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select> 

        </div>

        <div>
          <label className="formLabel">State:</label>
          <input type="text" name="state"
          placeholder="Enter state"
          value={profile.state}
          onChange={handleChange} 
          className="formInput"
          required
        />
        </div>  
        

        <button type="submit" 
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:bg-gray-400" 
        disabled={loading}
        >{loading ? 'Matching Schemes...' : 'Find Matching Schemes'}
        </button>
      </form> 
      </div>
      </div>
  );
} 





