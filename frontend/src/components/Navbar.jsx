import React from 'react'

const Navbar = () => {
  return (
    <nav class="navbar bg-primary navbar-expand-lg" data-bs-theme="dark">
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <a class="navbar-brand"><span class="badge bg-danger text-light">Calculator</span></a>
      </div>
      <div class="col d-flex justify-content-end">
        <div class="navbar-nav">
          <a class="nav-link" href="/">MyProfile</a>
          <a class="nav-link" href="/calculator">Calculator</a>
          <a class="nav-link" href="/fetchdata">Data</a>
          <a class="nav-link" href="/inventory">Inventory</a>
        </div>
      </div>
    </div>
  </div>
</nav>

  )
}

export default Navbar