import React from "react";
import styles from "./Header.module.css";
import video from "../assets/t1.mp4";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/velotech_logo/cool velo.png";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  const anchors = [
    { title: "OVERVIEW", className: "nav-link", href: "#overview" },
    { title: "ABOUT US", className: "nav-link", href: "#about_us" },
    { title: "PRODUCTS", className: "nav-link", href: "#products" },
    { title: "UPCOMINGS", className: "nav-link", href: "#upcomings" },
    { title: "CONTACT US", className: "nav-link", href: "#contact_us" },
  ];
  return (
    <main className={styles.header_container}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" />
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
            {/* <AiOutlineMenu
              className={`navbar-toggler-icon ${styles.menu_icon}`}
            /> */}
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${styles.navlist_container}`}
            id="navbarNavAltMarkup"
          >
            <div className={`navbar-nav ${styles.nav_items}`}>
              {anchors?.map(({ title, className, href }) => {
                return (
                  <a
                    className={className}
                    aria-current="page"
                    href={href}
                    key={href}
                  >
                    {title}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
      <h1 className={styles.banner_content}>
        WE DESIGN ENERGY EFFICIENT DEVICES
      </h1>
      <video src={video} autoPlay loop muted className={styles.video} />
    </main>
  );
};

export default Header;
<Navbar>
  <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
  </Container>
</Navbar>;
