import { useSelector } from "react-redux";
import Navigation from "../components/Navigation/index";
import AuthChecker from "./AuthChecker";

function AppHome({ Component, pageProps, router }) {
  const { menuOpen, loggedIn } = useSelector((state) => state.global);

  return (
    <div className="c-app">
      <div className="c-app__container">
        <div className={`c-app__content ${menuOpen ? "u-menu-open" : ""}`}>
          <header>
            <Navigation loggedIn={loggedIn} menuOpen={menuOpen} />
          </header>
          <main className="c-main">
            <AuthChecker router={router}>
              <Component {...pageProps} />
            </AuthChecker>
          </main>
          <footer></footer>
        </div>
      </div>
    </div>
  );
}

export default AppHome;
