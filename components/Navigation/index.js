import Link from "next/link";
import { useState } from "react";
import Hamburger from "./Hamburger";
import styles from "../../styles/components/navigation.module.scss";
import { FaRegUser } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";

export default function Navigation({}) {
  const [menuOpen, isMenuOpen] = useState(false);
  const toggleMenu = () => {
    isMenuOpen(!menuOpen);
  };
  return (
    <nav className={styles["c-navigation"]}>
      <div className={styles["c-navigation__content"]}>
        <div className={styles["c-navigation__brand"]}>
          <Hamburger handleClick={toggleMenu} isOpen={menuOpen} />
          <h1>Roy Roodenburg</h1>
        </div>
        <div className={styles["c-navigation__icons"]}>
          <Link href="/about">
            <div className={styles["c-navigation__icon"]}>
              <FiInfo size="30" />
              <span className={styles["c-navigation__icon--text"]}>About</span>
            </div>
          </Link>
          <Link href="/login">
            <div className={styles["c-navigation__icon"]}>
              <FaRegUser size="30" />
              <span className={styles["c-navigation__icon--text"]}>Login</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
