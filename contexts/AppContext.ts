import { createContext } from "react";
import { User } from "../lib/session";

export type AppContextType = {
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
  user: User | null;
  setUser: (user: User | null) => void;
};

export const AppContext = createContext<AppContextType>({
  menuOpen: false,
  setMenuOpen: () => {},
  user: null,
  setUser: () => {},
});
