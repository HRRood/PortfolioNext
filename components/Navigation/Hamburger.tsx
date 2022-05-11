interface Props {
  handleClick: () => void;
  isOpen: boolean;
}

export default function Hamburger({ handleClick, isOpen }: Props) {
  return (
    <div className={`c-hamburger ${isOpen ? "open" : ""}`} onClick={handleClick}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
