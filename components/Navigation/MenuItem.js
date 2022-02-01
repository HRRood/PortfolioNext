import Link from "next/link";
import { useDispatch } from "react-redux";
import { setMenuOpen } from "../../utils/reducers/global";

export default function MenuItem({ name, url }) {
  const dispatch = useDispatch();

  const closeMenu = () => {
    dispatch(setMenuOpen(false));
  };
  return (
    <Link href={url}>
      <div className="c-navigation__item" onClick={closeMenu}>
        <p className="c-navigation__item__name">{name}</p>
      </div>
    </Link>
  );
}
