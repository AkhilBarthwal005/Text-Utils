import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // replace anchor tag with link and herf with to it will help us to make fast routing without reloading the application.

// this navbar used some props and props nothing but property used in this navbar which is passed by user when user use this navbar

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {/* we are use title here which is passed by the user */}
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={props.toggleTheme} // here we are using functio which is passed by the app.js
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// this is used for restricting the type of props passed in the function this ensure that the type of title and aboutText should be always string and isRequired is used for making this as mendatory if we not pass the argument than it will give you error.
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

// this make sure that if user does not passed the props than the value of title and about should be default taken by the function
Navbar.defaultProps = {
  title: "Enter the Title",
  aboutText: "About",
};
