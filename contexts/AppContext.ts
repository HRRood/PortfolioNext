import { createContext } from "react";

interface AppContextType {
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
}

export const AppContext = createContext<AppContextType>({
  menuOpen: false,
  setMenuOpen: () => {},
});
