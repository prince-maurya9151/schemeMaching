import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">Scheme Matching Portal</Link>

      <div className="navbarLinks">
        <Link to="/" className="navLink">Home</Link>

          <Link to="/dashboard" className="navLink">Dashboard</Link>

        <Link to="/about" className="navLink">About</Link>

        {user ? (
          <>
            <span className="welcomeText">Welcome, {user.name}!</span>
            <button onClick={handleLogout} className="logoutButton">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="navLink">Login</Link>
            <Link to="/register" className="navLink navLinkHighlight">
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}