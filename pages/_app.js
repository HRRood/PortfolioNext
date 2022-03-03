import { Provider } from "react-redux";
import reducers from "../utils/reducers/index";
import AppHome from "../components/AppHome";

// STYLES
import "../styles/globals.scss";

function MyApp({ Component, pageProps, router }) {
  return (
    <Provider store={reducers}>
      <AppHome Component={Component} pageProps={pageProps} router={router} />
    </Provider>
  );
}

export default MyApp;
