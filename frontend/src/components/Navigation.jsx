import { useState } from "react";
import React, { useEffect } from "react";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      console.log(email);
      setLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("email");
    setLoggedIn(false);
    window.location.href = "/login";
  };

  return (
    <nav className="navbar bg-primary navbar-expand-lg" data-bs-theme="dark">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <a className="navbar-brand">
              <span className="badge bg-danger text-light">Calculator</span>
            </a>
          </div>
          <div className="col d-flex justify-content-end">
            <div className="navbar-nav">
              <a className="nav-link" href="/">
                MyProfile
              </a>
              <a className="nav-link" href="/calculator">
                Calculator
              </a>
              <a className="nav-link" href="/fetchdata">
                Data
              </a>
              <a className="nav-link" href="/inventory-management">
                Inventory
              </a>
              {loggedIn ? (
                <button
                  className="text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 focus:ring-4 focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-6 py-2.5 text-center ml-3"
                  onClick={logoutHandler}
                >
                  Logout
                </button>
              ) : (
                <a
                  className="text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 focus:ring-4 focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-6 py-2.5 text-center ml-3"
                  href="/login"
                >
                  Login
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
