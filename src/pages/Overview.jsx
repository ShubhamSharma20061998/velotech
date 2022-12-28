import React from "react";
import styles from "./Overview.module.css";
import Card from "react-bootstrap/Card";
import { MdPhone, MdEmail } from "react-icons/md";
import { HiGlobeAlt } from "react-icons/hi";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { Parallax } from "react-parallax";

const Overview = () => {
  const vision = [
    "Our core vision lies in providing the latest technology at affordable prices. As the already existing products with the same technology in the market are expensive and complex.We are solving the problem and coming with the solution of cost effectiveness and better efficiency at same with less complexity. Also, the power backup feature that we are offering is not being given by any of our competitor, as a result they are unable to compete with our cost.",
  ];
  const mission = [
    "With our first stage product, we are catering lower and middle class who are suffering from frequent power failure and cannot afford an inverter. We are aiming for selling 15000 pieces of fan in first year.",
  ];
  return (
    <main>
      <section className={`${styles.company_overview} container`} id="overview">
        <h2>COMPANY OVERVIEW</h2>
        <div className={`row ${styles.company_overview_row}`}>
          <div className={`card col-11 col-md-4 ${styles.card}`}>
            <div className="card-body">
              <h4 className="card-title">OUR VISION</h4>
              <p className="card-text">{vision}</p>
            </div>
          </div>
          <div className={`card col-11 col-md-4 ${styles.card}`}>
            <div className="card-body">
              <h4 className="card-title">OUR MISSION</h4>
              <p className="card-text">{mission}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="our_products container" id="products">
        <h2>OUR PRODUCTS</h2>
        <h4>STACK CORE AXILE FLUX MOTOR</h4>
      </section>
      <section className="upcomings container" id="upcomings">
        <h2>FUTURE TECH UNDER DEVELOPEMENT</h2>
        <h4>AXIAL MOTOR FOR E-MOBILITY</h4>
      </section>
      <section className="axialMotorFan container">
        <h2>AXIAL FLUX MOTOR FAN WITH POWER BACKUP UPTO 4HOURS</h2>
        <h4>
          Technology stacking core axial flux motor usp. Consume extremly low
          power input 12 to 18 watt with in build battery backup upto 3 to 4
          hours
        </h4>
      </section>
      <section className="productsUnderDevelopement container">
        <h2>PRODUCTS UNDER DEVELOPEMENT</h2>
        <h4>AC 250 WATT WILL GIVE YOU POWER UPTO 2 HOURS AFTER POWER CUT</h4>
        <div className="row">
          <div
            className={`col-9 col-md-4 ${styles.productsUnderDevelopement_cards}`}
          >
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>COOLER 60 WATT</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className="col-9 col-md-4">
            <p>
              Power backup upto 5 hours functions at 18-20 watt. Higher backup
              time on inverter system remote control upto 75% energy saving.
            </p>
          </div>
          <div
            className={`col-9 col-md-4 ${styles.productsUnderDevelopement_cards}`}
          >
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>PUMP 300 WATT</Card.Title>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
      <Parallax
        blur={5}
        bgImage="https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg"
        bgImageAlt="the cat"
        strength={300}
      >
        <section className="footer" id="contact_us">
          <div className={`${styles.footer_content_container} container`}>
            <h2>CONTACT INFORMATION</h2>
            <div className={`row ${styles.footer_inner_row}`}>
              <a href="tel:+91-9905705025" id="call">
                <MdPhone className={styles.icons} />
                <u>+91-9905705025</u>
              </a>
            </div>
            <ReactTooltip
              anchorId="call"
              place="top"
              content="Call Us"
              effect="float"
            />
            <div className={`row ${styles.footer_inner_row}`}>
              <a href="mailto:ar.aditya970@gmail.com" id="mail">
                <MdEmail className={styles.icons} />
                <u>ar.aditya970@gmail.com</u>
              </a>
            </div>
            <ReactTooltip
              anchorId="mail"
              place="top"
              content="Email Us"
              effect="float"
            />
            <div className={`row ${styles.footer_inner_row}`}>
              <a href="#" id="website">
                <HiGlobeAlt className={styles.icons} />
                <u>Velotechinnovation</u>
              </a>
            </div>
            <ReactTooltip
              anchorId="website"
              place="top"
              content="Visit Us"
              effect="float"
            />
          </div>
        </section>
      </Parallax>
    </main>
  );
};

export default Overview;
// https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg
