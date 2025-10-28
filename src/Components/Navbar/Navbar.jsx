import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg ${styles.navbarBody}`}>
        <div className="container">
          <NavLink
            className={`navbar-brand text-white ${styles.navBrand}`}
            to={""}
          >
            START FRAMEWORK
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className={`navbar-nav ms-auto ${styles.navLink}`}>
              <li className="nav-item">
                <NavLink
                  to="about"
                  className={({ isActive }) =>
                    `nav-link text-white mx-2 ${
                      isActive ? styles.activeLink : ""
                    }`
                  }
                >
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="portfolio"
                  className={({ isActive }) =>
                    `nav-link text-white mx-2 ${
                      isActive ? styles.activeLink : ""
                    }`
                  }
                >
                  PORTFOLIO
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="contact"
                  className={({ isActive }) =>
                    `nav-link text-white mx-2 ${
                      isActive ? styles.activeLink : ""
                    }`
                  }
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
