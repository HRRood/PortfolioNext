import Cookies from "cookies";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserLoggedIn } from "../utils/reducers/global";

export default function Navigation({}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUserLoggedIn(false));
  }, []);
  return <h1>Logging out!</h1>;
}

export async function getServerSideProps({ req, res }) {
  const cookies = new Cookies(req, res);
  cookies.set("token");

  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
}
