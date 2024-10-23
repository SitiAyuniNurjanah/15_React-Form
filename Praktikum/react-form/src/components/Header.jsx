import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/Header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg border-bottom">
      <div className="container-fluid">
        <Link className="navbar-brand fs-6 fw-semibold" to="/">Simple Header</Link>
        <div className="nav nav-pills" id="navbarNavAltMarkup">
          <div className="navbar-nav fw-semibold">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/features">Features</Link>
            <Link className="nav-link" to="/pricing">Pricing</Link> 
            <Link className="nav-link" to="/faqs">FAQs</Link>
            <Link className="nav-link" to="/about">About</Link> 
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;