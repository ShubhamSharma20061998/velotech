import React from "react";
import styles from "./Header.module.css";
import video from "../assets/banner_video.mp4";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <main className={styles.header_container}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            LOGO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <AiOutlineMenu className={styles.menu_icon} />
          </button>
          <div
            className={`collapse navbar-collapse ${styles.navlist_container}`}
            id="navbarNavAltMarkup"
          >
            <div className={`navbar-nav ${styles.nav_items}`}>
              <a className="nav-link" aria-current="page" href="#overview">
                OVERVIEW
              </a>
              <a className="nav-link" aria-current="page" href="#products">
                PRODUCTS
              </a>
              <a className="nav-link" aria-current="page" href="#upcomings">
                UPCOMINGS
              </a>
              <a className="nav-link " aria-current="page" href="#contact_us">
                CONTACT US
              </a>
            </div>
          </div>
        </div>
      </nav>
      <h1 className={styles.banner_content}>
        WE DESIGN ENERGY EFFICIENT DEVICES
      </h1>
      <video src={video} autoPlay loop muted />
    </main>
  );
};

export default Header;
