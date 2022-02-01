import Navigation from "../components/navigation";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer></footer>
    </>
  );
}

export default MyApp;
