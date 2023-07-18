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
        I am a web application developer with a focus on creating dynamic and interactive websites. Currently, I am employed at Pangaea Digital Agency, where I
        actively contribute to the development of various web applications and online solutions.
      </p>
    </div>
  );
};

export default Infocontainer;
