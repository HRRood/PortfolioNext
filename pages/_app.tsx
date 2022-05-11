import Layout from "../components/Layout";

// STYLEs
import "../styles/globals.scss";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { useState } from "react";
import { AppContext } from "../contexts/AppContext";

function MyApp({ Component, pageProps }: AppProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <AppContext.Provider value={{ menuOpen, setMenuOpen }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}

export default MyApp;
