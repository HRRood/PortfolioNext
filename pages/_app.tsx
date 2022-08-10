import Layout from "../components/Layout";

// STYLEs
import "../styles/globals.scss";
import { useState } from "react";
import { AppContext } from "../contexts/AppContext";
import Socialicons from "../components/global/SocialIcons";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <AppContext.Provider value={{ menuOpen, setMenuOpen }}>
      <Layout>
        <Component {...pageProps} />
        <Socialicons />
      </Layout>
    </AppContext.Provider>
  );
}

export default MyApp;
