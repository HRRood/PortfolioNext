import { useContext } from "react";

// Components
import Hamburger from "./Hamburger";
import MenuItem from "./MenuItem";

import { AppContext } from "../../contexts/AppContext";
import { menuItemType } from "../../@types/MenuItems";
import MenuItems from "../../utils/data/MenuItems.json";

export default function Navigation({}) {
  const { menuOpen, setMenuOpen, user } = useContext(AppContext);

  const menuItems = MenuItems as menuItemType[];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const renderMenuItems = (items: menuItemType[]) => {
    return items
      .filter((item) => item.visible)
      .filter((item) => !item.needsLogin || (item.needsLogin && user))
      .map((item, i) => {
        if (item.group && item.items) {
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
    <nav className="c-navigation" suppressHydrationWarning={true}>
      <div className="c-navigation__brand">
        <Hamburger handleClick={toggleMenu} isOpen={menuOpen} />
      </div>

      <div className={`c-navigation--side ${menuOpen ? "open" : ""}`}>
        <Hamburger handleClick={toggleMenu} isOpen={menuOpen} />
        <div className="c-navigation--side__content">{renderMenuItems(menuItems)}</div>
      </div>
    </nav>
  );
}
