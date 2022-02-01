import { useSelector } from "react-redux";
import Navigation from "../components/navigation";

function AppHome({ Component, pageProps }) {
  const { menuOpen } = useSelector((state) => state.global);
  return (
    <div className="c-app">
      <div className="c-app__container">
        <div className={`c-app__content ${menuOpen ? "u-menu-open" : ""}`}>
          <header>
            <Navigation />
          </header>
          <main className="c-main">
            <Component {...pageProps} />
          </main>
          <footer></footer>
        </div>
      </div>
    </div>
  );
}

export default AppHome;
