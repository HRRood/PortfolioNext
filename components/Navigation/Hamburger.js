import styles from "../../styles/components/hamburger.module.scss";
export default function Hamburger({ handleClick, isOpen }) {
  console.log(styles);
  return (
    <div className={`${styles["c-hamburger"]} ${isOpen ? styles.open : ""}`} onClick={handleClick}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
