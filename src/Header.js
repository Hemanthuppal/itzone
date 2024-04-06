import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="container-fluid sticky-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark p-0">
          <NavLink to="/" className="navbar-brand">
            <h1 className="text-white">AI<span className="text-dark">.</span>Tech</h1>
          </NavLink>
          <button className="navbar-toggler ms-auto me-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto">
              <NavLink to="/" className={({ isActive }) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}>Home</NavLink>
              <NavLink to="/about" className={({ isActive }) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}>About</NavLink>
              <NavLink to="/service" className={({ isActive }) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}>Services</NavLink>
              <NavLink to="/project" className={({ isActive }) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}>Projects</NavLink>
              {/* For the dropdown, you might need to manually manage active states or explore other UI approaches */}
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                <div className="dropdown-menu bg-light mt-2">
                  <NavLink to="/feature" className="dropdown-item">Features</NavLink>
                  <NavLink to="/team" className="dropdown-item">Our Team</NavLink>
                  <NavLink to="/faq" className="dropdown-item">FAQs</NavLink>
                  <NavLink to="/testimonial" className="dropdown-item">Testimonial</NavLink>
                  <NavLink to="/404" className="dropdown-item">404 Page</NavLink>
                </div>
              </div>
              <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-item nav-link active" : "nav-item nav-link"}>Contact</NavLink>
            </div>
            <button className="btn text-white p-0 d-none d-lg-block" data-bs-toggle="modal" data-bs-target="#searchModal">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
