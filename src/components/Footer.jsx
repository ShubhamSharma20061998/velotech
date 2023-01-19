import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const anchors = [
    { title: "OVERVIEW", className: "nav-link", href: "#overview" },
    { title: "ABOUT US", className: "nav-link", href: "#about_us" },
    { title: "PRODUCTS", className: "nav-link", href: "#products" },
    { title: "UPCOMINGS", className: "nav-link", href: "#upcomings" },
    { title: "CONTACT US", className: "nav-link", href: "#contact_us" },
  ];
  return (
    <>
      <div className="row container">
        <div className="col-md-4">
          <h6>Quick Links</h6>
          
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-4"></div>
      </div>
    </>
  );
};

export default Footer;
