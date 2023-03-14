import React from "react";
import styles from "./Header.module.css";
import video from "../assets/banner-video-1.mp4";
import logo from "../assets/WhatsApp_Image_2023-01-27_at_13.19.18-removebg-preview.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


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
      <Navbar expand="lg">
        <Container className={styles.nav_container}>
          <Navbar.Brand href="#">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className={styles.nav_navigator_container}
          >
            <Nav className={styles.nav_navigators}>
              {anchors?.map(({ href, title }) => {
                return (
                  <Nav.Link href={href} key={href}>
                    {title}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h1 className={styles.banner_content}>
        WE DESIGN ENERGY EFFICIENT DEVICES
      </h1>
      <video src={video} autoPlay loop muted className={styles.video} />
    </main>
  );
};

export default Header;
