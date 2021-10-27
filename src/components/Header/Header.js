import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="sub-header">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <div className="me-4">
              <FontAwesomeIcon icon={faEnvelope} />{" "}
              <span className="ms-1">info@health-care.com</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faPhone} />{" "}
              <span className="ms-1">+880 1611-023881</span>
            </div>
          </div>
          <div className="d-flex align-items-center"></div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light main-header bg-nav-color">
        <div className="container">
          {/* Logo */}
          <div>
            <Link className="navbar-brand logo" to="/">
              Health<span> Care</span>
            </Link>
          </div>
          {/* Toggle btn */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Nav Links */}
          <div>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item ms-4">
                  <Link
                    className="nav-link"
                    activeStyle={{ color: "black" }}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item ms-4">
                  <NavLink
                    className="nav-link"
                    activeStyle={{ color: "black" }}
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item ms-4">
                  <NavLink
                    className="nav-link"
                    activeStyle={{ color: "black" }}
                    to="/news"
                  >
                    News
                  </NavLink>
                </li>
                <li className="nav-item ms-4">
                  <NavLink
                    className="nav-link"
                    activeStyle={{ color: "black" }}
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
