import { useState } from "react";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      console.log(email);
      setLoggedIn(true);
    }
  }, [location]);

  const logoutHandler = () => {
    localStorage.removeItem("email");
    setLoggedIn(false);
    window.location.href = "/login";
  };

  return (
    <div
      className="container-fluid  bg-primary navbar-expand-lg"
      data-bs-theme="dark"
    >
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <a className="navbar-brand">
          <span className="badge bg-danger text-light">Calculator</span>
        </a>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to="/" className="nav-link px-2">
              MyProfile
            </Link>
          </li>
          <li>
            <Link to="/calculator" className="nav-link px-2 ">
              Calculator
            </Link>
          </li>
          <li>
            <Link to="/fetchdata" className="nav-link px-2 ">
              Data
            </Link>
          </li>
          <li>
            <Link to="/inventory-management" className="nav-link px-2 ">
              Inventory
            </Link>
          </li>
          <li>
            <Link to="/user-details" className="nav-link px-2 ">
              User Info
            </Link>
          </li>
        </ul>

        <div className="col-md-3 text-end">
          {loggedIn ? (
            <button
              onClick={logoutHandler}
              className="btn btn-outline-secondary me-2"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline-light me-2">
                Login
              </Link>
              <Link to="/register" className="btn btn-primary">
                Sign-up
              </Link>
            </>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
