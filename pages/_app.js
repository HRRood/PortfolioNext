import { Provider } from "react-redux";
import reducers from "../utils/reducers/index";
import Layout from "../components/Layout";

// STYLEs
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={reducers}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
