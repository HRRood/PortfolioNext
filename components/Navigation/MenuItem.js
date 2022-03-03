import Cookies from "js-cookie";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setMenuOpen, setUserLoggedIn } from "../../utils/reducers/global";

export default function MenuItem({ name, url }) {
  const dispatch = useDispatch();

  const closeMenu = () => {
    dispatch(setMenuOpen(false));
  };

  const logout = () => {
    dispatch(setUserLoggedIn(false));
    Cookies.remove("token");
    dispatch(setMenuOpen(false));
  };

  return (
    <Link href={url}>
      <div className="c-navigation__item" onClick={name.toLowerCase() === "logout" ? logout : closeMenu}>
        <p className="c-navigation__item__name">{name}</p>
      </div>
    </Link>
  );
}
