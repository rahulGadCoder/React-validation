import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar bg-dark fixed-top" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Home
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
