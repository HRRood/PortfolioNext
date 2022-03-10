import { useSelector } from "react-redux";
import Navigation from "./Navigation/index";

import styles from "../styles/Layout.module.scss";

function Layout({ children }) {
  const { menuOpen } = useSelector((state) => state.global);
  return (
    <div className={styles["c-app"]}>
      <div className={`${styles["c-app__content"]} ${menuOpen ? styles["u-menu-open"] : ""}`}>
        <header>
          <Navigation />
        </header>
        <main className={styles["c-main"]}>{children}</main>
        <footer>
          <a href="https://github.com/HRRood/Next_project" className={styles["c-footer__link"]} target="_blank" rel="noopener noreferrer">
            Made by <strong>Roy Roodenburg</strong> <img src="/images/github.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
    </div>
  );
}

export default Layout;
