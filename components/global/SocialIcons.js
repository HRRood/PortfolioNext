import React from "react";

// Styles
import styles from "../../styles/components/SocialIcons.module.scss";
import getSvgIcon from "../../utils/frontend";

const Socialicons = () => {
  return (
    <div className={styles["c-social-icons"]}>
      <ul className={styles["c-social-icons__list"]}>
        <li>
          <a href="https://github.com/HRRood" target="_blank" rel="noopener noreferrer">
            {getSvgIcon("github")}
          </a>
        </li>
        <li>
          <a href="https://github.com/HRRood" target="_blank" rel="noopener noreferrer">
            {getSvgIcon("linkedin")}
          </a>
        </li>
        <li>Instagram</li>
      </ul>
    </div>
  );
};

export default Socialicons;
