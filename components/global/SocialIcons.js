import React from "react";
import { useSelector } from "react-redux";

// Styles
import styles from "../../styles/components/SocialIcons.module.scss";
import getSvgIcon from "../../utils/frontend";

const Socialicons = () => {
  const { menuOpen } = useSelector((state) => state.global);

  return (
    <div className={`${styles["c-social-icons"]} ${menuOpen ? styles["c-social-icons--open"] : ""}`}>
      <ul className={styles["c-social-icons__list"]}>
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
      </ul>
    </div>
  );
};

export default Socialicons;
