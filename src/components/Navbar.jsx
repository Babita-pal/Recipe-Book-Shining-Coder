// src/components/Navbar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-title" onClick={() => navigate('/')}>
        RecipeMaster
      </div>
      <button
        onClick={() => navigate('/login')}
        className="navbar-button"
      >
        Login
      </button>
    </nav>
  );
};

export default Navbar;