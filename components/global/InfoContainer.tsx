import React from "react";

import styles from "../../styles/components/InfoContainer.module.scss";

const Infocontainer = () => {
  return (
    <div className={styles.infoContainer}>
      <h1>
        <span className={styles.title}>Roy Roodenburg</span>
        <br />

        <span className={`${styles.title} ${styles["title--smaller"]}`}>Web Developer</span>
      </h1>
      <p className={styles.description}>
        I'm a developer specializing in web applications. Currently working on building ecommerce platforms at{" "}
        <a className={styles.link} target="_blank" rel="noopener noreferrer" href="https://www.pangaea.nl/">
          Pangaea Digital Agency
        </a>
      </p>
    </div>
  );
};

export default Infocontainer;
