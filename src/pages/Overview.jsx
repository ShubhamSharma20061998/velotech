import React from "react";
import styles from "./Overview.module.css";

const Overview = () => {
  return (
    <main>
      <section className="company_overview container">
        <h2>COMPANY OVERVIEW</h2>
        <div className={`row ${styles.row}`}>
          <div className={`card col-11 col-md-4 ${styles.card}`}>
            <div className="card-body">
              <h4 className="card-title">OUR VISION</h4>
              <p className="card-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Placeat tempore mollitia sint porro a amet ipsum dicta earum
                quia omnis fugiat quod, vero nemo accusamus nulla quasi quam. A
                laudantium possimus perferendis soluta laboriosam, ab reiciendis
                deleniti molestias pariatur. Quidem incidunt corrupti quae! Nam
                ea repudiandae accusantium aliquam vel, commodi fuga minus ipsam
                culpa ex ducimus reiciendis enim! Saepe culpa sed voluptatum
                amet hic odio et officia ab, aliquid quas ut impedit adipisci
                placeat error quibusdam commodi excepturi repellendus temporibus
                iste? Corporis, itaque facilis. Fugiat ad vel, illum optio
                pariatur rem, cupiditate, modi provident blanditiis iure enim
                ducimus similique? Itaque?
              </p>
            </div>
          </div>
          <div className={`card col-11 col-md-4 ${styles.card}`}>
            <div className="card-body">
              <h4 className="card-title">OUR MISSION</h4>
              <p className="card-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Placeat tempore mollitia sint porro a amet ipsum dicta earum
                quia omnis fugiat quod, vero nemo accusamus nulla quasi quam. A
                laudantium possimus perferendis soluta laboriosam, ab reiciendis
                deleniti molestias pariatur. Quidem incidunt corrupti quae! Nam
                ea repudiandae accusantium aliquam vel, commodi fuga minus ipsam
                culpa ex ducimus reiciendis enim! Saepe culpa sed voluptatum
                amet hic odio et officia ab, aliquid quas ut impedit adipisci
                placeat error quibusdam commodi excepturi repellendus temporibus
                iste? Corporis, itaque facilis. Fugiat ad vel, illum optio
                pariatur rem, cupiditate, modi provident blanditiis iure enim
                ducimus similique? Itaque?
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="our_products">
        <h2>OUR PRODUCTS</h2>
        <h4>STACK CORE AXILE FLUX MOTOR</h4>
      </section>
      <section className="upcomings">
        <h2>FUTURE TECH UNDER DEVELOPEMENT</h2>
        <h4>AXIAL MOTOR FOR E-MOBILITY</h4>
      </section>
    </main>
  );
};

export default Overview;
