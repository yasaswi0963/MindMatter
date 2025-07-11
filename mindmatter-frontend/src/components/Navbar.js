import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/forum">Forum</Link> | <Link to="/therapy">Therapy</Link> | <Link to="/profile">Profile</Link>
      <button onClick={handleLogout}>Logout</button>
      <Link to="/book-therapy" className="hover:text-blue-400">
  Book Session
</Link>

    </nav>
  );
};

export default Navbar;