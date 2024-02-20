import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
        <a className="navbar-brand"><span className="badge bg-light text-dark">MyApp</span></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link" href="/">Profile</a>
                    <a className="nav-link" href="/calculator">Calculator</a>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar