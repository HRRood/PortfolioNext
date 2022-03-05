import Link from "next/link";
import Hamburger from "./Hamburger";
import { FaRegUser } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setMenuOpen } from "../../utils/reducers/global";
import MenuItem from "./MenuItem";

export default function Navigation({}) {
  const { menuOpen, menuItems } = useSelector((state) => state.global);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    dispatch(setMenuOpen(!menuOpen));
  };

  const renderMenuItems = (items = []) => {
    return items.map((item, i) => {
      if (item.group) {
        return (
          <div key={i} className="c-navigation__group">
            <p className="c-navigation__group__name">{item.group}</p>
            <div className="c-navigation__group__items">{renderMenuItems(item.items)}</div>
          </div>
        );
      } else {
        return <MenuItem key={i} name={item.name} url={item.path} />;
      }
    });
  };

  return (
    <nav className="c-navigation">
      <div className="c-navigation__content">
        <div className="c-navigation__brand">
          <Hamburger handleClick={toggleMenu} isOpen={menuOpen} />
          <Link href="/">
            <h1 className="c-navigation__title">Roy Roodenburg</h1>
          </Link>
        </div>
        {/* <div className="c-navigation__icons hidden-xs">
          <Link href="/login">
            <div className="c-navigation__icon">
              <FaRegUser size="30" />
              <span className="c-navigation__icon--text">Login</span>
            </div>
          </Link>
        </div> */}
      </div>

      <div className={`c-navigation--side ${menuOpen ? "open" : ""}`}>
        <div className="c-navigation--side__content">{renderMenuItems(menuItems)}</div>
      </div>
    </nav>
  );
}
