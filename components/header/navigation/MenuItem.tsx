import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";

type Props = {
  name: string;
  url: string;
};

export default function MenuItem({ name, url }: Props) {
  const { setMenuOpen } = useContext(AppContext);

  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <Link href={url}>
      <div className="c-navigation__item" onClick={closeMenu}>
        <p className="c-navigation__item__name">{name}</p>
      </div>
    </Link>
  );
}
