import Navigation from "./header/navigation/index";

import styles from "../styles/Layout.module.scss";
import getSvgIcon from "../utils/frontend";
import {ReactNode, useContext} from "react";
import { AppContext } from "../contexts/AppContext";

function Layout({ children }: { children: ReactNode }) {
  const { menuOpen } = useContext(AppContext);
  return (
    <div className={styles["c-app"]}>
      <div className={`${styles["c-app__content"]} ${menuOpen ? styles["u-menu-open"] : ""}`}>
        <header>
          <Navigation />
        </header>
        <main className={styles["c-main"]}>{children}</main>
        <footer>
          <a href="https://github.com/HRRood/Next_project" className={styles["c-footer__link"]} target="_blank" rel="noopener noreferrer">
            Made by <strong>Roy Roodenburg</strong> {getSvgIcon("github")}
          </a>
        </footer>
      </div>
    </div>
  );
}

export default Layout;
