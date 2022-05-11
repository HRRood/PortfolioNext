import React, { useContext, useState } from "react";
import { AppContext } from "../../contexts/AppContext";

// Styles
import styles from "../../styles/components/SocialIcons.module.scss";
import getSvgIcon from "../../utils/frontend";

const Socialicons = () => {
  const { menuOpen } = useContext(AppContext);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={`${styles["c-social-icons"]} ${menuOpen ? styles["c-social-icons--menuopen"] : ""} ${open ? styles["c-social-icons--open"] : ""}`}>
        <ul className={styles["c-social-icons__list"]}>
          <li>
            <p className={`${styles.toggleButton} ${open ? styles["toggleButton--open"] : ""}`} onClick={() => setOpen(!open)}>
              {getSvgIcon(`arrow-${open ? "down" : "up"}`)}
            </p>
          </li>
          <li>
            <a href="https://github.com/HRRood" target="_blank" rel="noopener noreferrer">
              {getSvgIcon("github")}
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/roy-roodenburg-444454156/" target="_blank" rel="noopener noreferrer">
              {getSvgIcon("linkedin")}
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/royrood44/" target="_blank" rel="noopener noreferrer">
              {getSvgIcon("instagram")}
            </a>
          </li>
          <li>
            <a href="mailto:roy.roodenburg@hotmail.com" target="_blank" rel="noopener noreferrer">
              {getSvgIcon("mail")}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Socialicons;
