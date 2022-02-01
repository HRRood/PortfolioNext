export default function Hamburger({ handleClick, isOpen }) {
  return (
    <div className={`c-hamburger ${isOpen ? "open" : ""}`} onClick={handleClick}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
