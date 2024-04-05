import React from "react";

const Navbar = () => {
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
              <a
                className="text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 focus:ring-4 focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-6 py-2.5 text-center ml-3"
                href="/login"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
