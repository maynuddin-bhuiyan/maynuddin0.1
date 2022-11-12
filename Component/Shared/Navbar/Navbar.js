import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <nav className="navbar navbar-expand-lg navbar-light" id={styles.Navbar}>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse justify-content-between ${styles.NavbarMenu}`}
          id="navbarToggleExternalContent"
        >
          <Link className="navbar-brand" href="/" rel="noreferrer">
            <Image width="153" height="31" src="/Logo.png" />
          </Link>
          <div className={`my-2 my-lg-0 ${styles.MenuItam}`}>
            <ul className={`navbar-nav mr-auto ${styles.Menu}`}>
              <li className="nav-item active">
                <a className="nav-link" href="#about">
                  About <span className="sr-only">(current)</span>
                </a>
              </li>              
              <li className="nav-item">
                <a className="nav-link" href="#experience">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#protfolio">
                  Protfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              <button className="button">
                <a
                  href="https://drive.google.com/file/d/1_KIuP5xv7mjAucMsF99gi8nivWlUJVsS/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Resume
                </a>
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
