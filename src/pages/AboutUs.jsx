import React from "react";
import veloVideo from "../assets/velotech_video.mp4";
import styles from "./AboutUs.module.css";
const AboutUs = () => {
  const textContent = [
    {
      paragraph:
        "Veltoech is a start-up company that is focused on designing and manufacturing energy efficient devices. The company was founded by a group of engineers who were passionate about finding ways to reduce energy consumption and reduce the carbon footprint of households and businesses.",
    },
    {
      paragraph:
        "Veltoech is committed to using sustainable materials and manufacturing processes, and all of their products are designed to be easily recyclable. The company is also actively involved in community outreach programs, working with local schools and non-profit organizations to educate people about the importance of energy efficiency.",
    },
    {
      paragraph:
        "Overall, Veltoech is a innovative start-up that is dedicated to helping people save energy and reduce their carbon footprint",
    },
  ];
  return (
    <>
      {textContent?.map(({ paragraph }) => {
        return <p key={paragraph}>{paragraph}</p>;
      })}
      <div className={`row ${styles.About_row}`}>
        <a href={veloVideo} target="_blank" className={styles.videoLink}>
          Watch Video
        </a>
      </div>
    </>
  );
};

export default AboutUs;
