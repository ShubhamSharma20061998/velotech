import React from "react";
import styles from "./ProdsUnderDev.module.css";
import AC from "../assets/ac.gif";
import cooler from "../assets/cooler.png";
const ProdsUnderDev = () => {
  const ACContent = [
    {
      paragraph:
        "Velotech is excited to announce the launch of our new product, the 250 watt AC with 2 hour power backup! This innovative device is perfect for people who need a reliable and efficient way to stay cool and comfortable, even during power outages.",
    },
    {
      paragraph:
        "The 250 watt AC is designed with energy efficiency in mind, using advanced technology to cool rooms quickly and effectively while consuming minimal power. It is also equipped with a powerful 2 hour power backup system, ensuring that you can stay cool and comfortable even during short-term power outages.",
    },
    {
      paragraph:
        "In addition to its cooling and power backup capabilities, the 250 watt AC is also equipped with a range of convenient features. It has a compact design, making it easy to install and transport, and a user-friendly control panel that allows you to adjust the temperature and other settings with ease.",
    },
    {
      paragraph:
        "Overall, Velotech's 250 watt AC with 2 hour power backup is a game-changing product that is sure to revolutionize the way you stay cool and comfortable. Whether you're at home, in the office, or on the go, this powerful and reliable device is an essential tool for staying cool and comfortable in any situation.",
    },
  ];
  const Cooler = [
    {
      paragraph:
        "Velotech is excited to introduce its newest product, a 60 watt cooler with a power backup of 4 hours. This innovative cooler is not only powerful and efficient, but it can also be controlled remotely, giving you the convenience and flexibility to adjust the temperature and settings from anywhere.",
    },
    {
      paragraph:
        "One of the standout features of this cooler is its 60 watt power rating, which allows it to cool down a room or space quickly and effectively. The 4 hour power backup ensures that you can continue to use the cooler even during power outages, giving you peace of mind and reliability.",
    },
    {
      paragraph:
        "The remote control feature of this cooler is particularly useful, as it allows you to adjust the temperature and settings without having to physically interact with the device. This can be especially convenient if the cooler is placed in a hard-to-reach location or if you simply want to make adjustments from the comfort of your couch.",
    },
    {
      paragraph:
        "Overall, Velotech's new cooler is a versatile and convenient device that is perfect for any home or office. Its powerful cooling capabilities, long-lasting power backup, and remote control functionality make it a must-have for anyone looking to keep their space comfortable and cool.",
    },
  ];
  return (
    <div className={styles.ProdsUnderDev_container}>
      <h4>Velotech's 250 watt AC with 2 hour power backup!</h4>
      <div className={`row ${styles.prodsRow}`}>
        <div className={`col-auto col-md-2 ${styles.image_container}`}>
          <img src={AC} alt="AC" className={styles.images} />
        </div>
        <div className="col-11 col-md-10">
          {ACContent?.map(({ paragraph }) => {
            return <p key={paragraph}>{paragraph}</p>;
          })}
        </div>
      </div>
      <h4 className={styles.h4}>
        Velotech's 60 watt cooler with a power backup of 4 hours!
      </h4>
      <div className={`row ${styles.prodsRow}`}>
        <div className="col-11 col-md-10">
          {Cooler?.map(({ paragraph }) => {
            return <p key={paragraph}>{paragraph}</p>;
          })}
        </div>
        <div className={`col-auto col-md-2 ${styles.image_container}`}>
          <img src={cooler} alt="Cooler" className={styles.images} />
        </div>
      </div>
    </div>
  );
};

export default ProdsUnderDev;
