import { User } from "../lib/session";

export type AppContextType = {
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
  user: User | null;
  setUser: (user: User | null) => void;
};
