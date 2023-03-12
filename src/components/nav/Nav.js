import React from "react";
import "./Nav.css";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../../assets/images/logo/logo.png";

const Nav = () => {
  return (
    <div>
      <nav class="container navbar navbar-expand-lg navbar-light py-4">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <img className="logo_design" src={logo} alt="" srcset="" />
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link smooth to="#" aria-current="page" class="nav-link">
                  HOME
                </Link>
              </li>
              <li class="nav-item">
                <Link smooth to="#about" aria-current="page" class="nav-link">
                  ABOUT US
                </Link>
              </li>
              <li class="nav-item">
                <Link smooth to="#service" aria-current="page" class="nav-link">
                  SERVICES
                </Link>
              </li>
              <li class="nav-item">
                <Link smooth to="#" aria-current="page" class="nav-link">
                  CASES
                </Link>
              </li>
              <li class="nav-item">
                <Link smooth to="#" aria-current="page" class="nav-link">
                  FEATURES
                </Link>
              </li>
              <li class="nav-item">
                <Link smooth to="#" aria-current="page" class="nav-link">
                  NEWS
                </Link>
              </li>
              <li class="nav-item">
                <Link smooth to="#contact" aria-current="page" class="nav-link">
                  CONTACT US
                </Link>
              </li>
            </ul>
            {/* <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
