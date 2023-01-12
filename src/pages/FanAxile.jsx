import React from "react";
import styles from "./FanAxial.module.css";
import fan from "../assets/fan.gif";

const FanAxile = () => {
  const textDescription = [
    {
      paragraph:
        "This fan is equipped with a stack core axial flux motor, which is a type of electric motor that is highly efficient and has a compact design. The stack core construction of the motor allows it to generate a strong magnetic field while using fewer materials, making it more power efficient than traditional motors.",
    },
    {
      paragraph:
        "The fan is also designed to be power efficient, consuming less electricity and producing less heat than traditional fans. This not only helps to reduce energy costs, but it also makes the fan more environmentally friendly.",
    },
    {
      paragraph:
        "In addition to its power efficiency, the fan is equipped with a battery backup system that allows it to operate for up to 4 hours in the event of a power outage. This feature is especially useful during storms or other emergencies when the power may be disrupted.",
    },
    {
      paragraph:
        "Finally, the fan can be remotely controlled, allowing you to adjust the speed and direction of the airflow from the comfort of your couch or bed. This feature is convenient and allows you to easily customize the airflow to suit your needs.",
    },
    {
      paragraph:
        "Overall, this fan is a great choice for those who want a remote controlled power-efficient and reliable cooling solution that can operate even during power outages.",
    },
  ];
  return (
    <>
      <div className={`row ${styles.fanAxile_row}`}>
        <div className="col-11 col-md-10">
          {textDescription?.map(({ paragraph }) => {
            return <p key={paragraph}>{paragraph}</p>;
          })}
        </div>
        <div className="col-auto col-md-2">
          <img src={fan} alt="fan" className={styles.fan_image} />
        </div>
      </div>
    </>
  );
};

export default FanAxile;
