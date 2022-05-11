import React from "react";

import styles from "../styles/pages/404.module.scss";

type Props = {};

const Custom404 = (props: Props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <h2 className={styles.desc}>Page not found or is still in construction {";)"}</h2>
    </div>
  );
};

export default Custom404;
