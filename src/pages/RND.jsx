import React from "react";
import { Accordion } from "react-bootstrap";
import ev_image from "../assets/ev.jpg";
import styles from "./RND.module.css";
const RND = () => {
  const textContent = [
    {
      paragraph:
        "Velotech focused on researching and developing the next generation of electric vehicle (EV) mobility. The company's mission is to create innovative and sustainable transportation solutions that meet the needs of people and businesses.",
    },
    {
      paragraph:
        "One of the key areas of focus for Velotech is the development of advanced battery technologies and power efficient engines. The company is working on developing high-capacity, long-lasting batteries that can enable EVs to travel longer distances on a single charge. They are also exploring the use of alternative energy sources, such as solar power, to charge their vehicles.",
    },
    {
      paragraph:
        "In addition to battery technology, Velotech is also researching new designs for EVs that are more aerodynamic and energy efficient. They are looking at ways to reduce the weight of the vehicles, as well as improve their handling and performance.",
    },
    {
      paragraph:
        "The company is committed to sustainability and reducing the carbon footprint of transportation. They believe that their work on EVs will help to reduce reliance on fossil fuels and contribute to the transition to a low-carbon economy.",
    },
    {
      paragraph:
        "Overall, Velotech is an exciting start-up that is pushing the boundaries of electric vehicle technology and working towards a more sustainable future for transportation.",
    },
  ];
  return (
    <>
      <div className={`row ${styles.RndRow}`}>
        <div className={`col-auto col-md-2 ${styles.image_container}`}>
          <img src={ev_image} alt="ev" className={styles.ev_image} />
        </div>
        <div className="col-11 col-md-10">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Know more...</Accordion.Header>
              <Accordion.Body>
                {textContent?.map(({ paragraph }) => {
                  return <p key={paragraph}>{paragraph}</p>;
                })}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default RND;
{
  /* <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Know more...</Accordion.Header>
    <Accordion.Body>
      {textContent?.map(({ paragraph }) => {
            return <p key={paragraph}>{paragraph}</p>;
          })}
    </Accordion.Body>
  </Accordion.Item>
</Accordion> */
}
