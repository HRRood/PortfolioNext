import Layout from "../components/Layout";
// STYLEs
import "../styles/globals.scss";
import { useEffect, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import Socialicons from "../components/global/SocialIcons";
import { AppProps } from "next/app";
import { User } from "../lib/session";
import useUser from "../hooks/useUser";

function MyApp({ Component, pageProps }: AppProps) {
  const { loading, userData } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(userData);

  useEffect(() => {
    setUser(userData);
  }, [userData]);

  if (loading) {
    return <></>;
  }

  return (
    <AppContext.Provider value={{ menuOpen, setMenuOpen, user, setUser }}>
      <Layout>
        <Component {...pageProps} />
        <Socialicons />
      </Layout>
    </AppContext.Provider>
  );
}

export default MyApp;
