import React from "react";
import styles from "./Overview.module.css";
import { MdPhone, MdEmail } from "react-icons/md";
import { HiGlobeAlt } from "react-icons/hi";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { Parallax } from "react-parallax";
import AboutUs from "./AboutUs";
import FanAxile from "./FanAxile";
import ProdsUnderDev from "./ProdsUnderDev";
import RND from "./RND";
import { ImLeaf } from "react-icons/im";
import visionImg from "../assets/vision.jpg";
import missionImg from "../assets/mission.jpg";

const Overview = () => {
  const vision = [
    "Our vision is to revolutionize the way people consume energy by offering a range of highly efficient power devices that significantly reduce energy waste and costs. Our products will cater to both residential and commercial consumers, and will range from smart plugs and outlets to solar panels and electric vehicle chargers.",
  ];
  const mission = [
    "Our mission is to become the go-to brand for those who prioritize sustainability and energy conservation. We believe that by creating innovative and reliable power solutions, we can make a positive impact on both the environment and people's wallets.",
  ];
  const overviewDescription = [
    "We are committed to using cutting-edge technology and design to create products that are not only efficient, but also easy to use and aesthetically pleasing. Our team of passionate and dedicated professionals will work tirelessly to ensure that our products exceed the expectations of our customers and make a tangible difference in the world.",
  ];
  const overviewDescription_2 = [
    "Ultimately, we aim to create a future where energy conservation is the norm, and where our products play a key role in building a more sustainable and equitable society.",
  ];
  return (
    <main>
      <section className={`${styles.company_overview} container`} id="overview">
        <h2>COMPANY OVERVIEW</h2>
        <div className={styles.company_overview_row}>
          <div className="row">
            <div className="col-11 col-md-4">
              <img
                src={visionImg}
                alt="vision"
                className={styles.visionImage}
              />
            </div>
            <div
              className={`card col-11 col-md-4 ${styles.card} ${styles.vision}`}
            >
              <div className="card-body">
                <h4 className="card-title">OUR VISION</h4>
                <p className="card-text">{vision}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className={`card col-11 col-md-4 ${styles.card} ${styles.mission}`}
            >
              <div className="card-body">
                <h4 className="card-title">OUR MISSION</h4>
                <p className="card-text">{mission}</p>
              </div>
            </div>
            <div className="col-11 col-md-4">
              <img
                src={missionImg}
                alt="mission"
                className={styles.missionImg}
              />
            </div>
          </div>
          <p>{overviewDescription}</p>
          <p>{overviewDescription_2}</p>
        </div>
      </section>

      <section className={styles.aboutus} id="about_us">
        <div className="container">
          <h2>ABOUT US</h2>
          <AboutUs />
        </div>
      </section>
      <section className={styles.axialMotorFan} id="products">
        <h2>
          OUR PRODUCTS
          <ImLeaf className={styles.leaf_icon} />
        </h2>
        <div className={`container ${styles.FanAxial}`}>
          <h3>AXIAL FLUX MOTOR FAN WITH POWER BACKUP UPTO 4HOURS</h3>
          <h4>
            Technology stacking core axial flux motor usp. Consume extremly low
            power input 12 to 18 watt with in build battery backup upto 3 to 4
            hours
          </h4>
          <FanAxile />
        </div>
        <div className={`${styles.productsUnderDevelopement} container`}>
          <h3>PRODUCTS UNDER DEVELOPEMENT</h3>
          <ProdsUnderDev />
        </div>
        <div className={`${styles.upcomings} container`} id="upcomings">
          <h3>FUTURE TECH UNDER RESEARCH AND DEVELOPEMENT</h3>
          <RND />
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
