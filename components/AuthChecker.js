import Router from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ApiManager from "../utils/api/manager";
import { setUserLoggedIn } from "../utils/reducers/global";

export default function AuthChecker({ children, router }) {
  const { loggedIn } = useSelector((state) => state.global);
  const privatePaths = ["/privatepage"];

  const dispatch = useDispatch();
  const apiManager = new ApiManager();
  const [loading, setLoading] = useState(privatePaths.includes(router.route));

  useEffect(async () => {
    setLoading(privatePaths.includes(router.route));
    const login = await apiManager.get("/api/auth/me");
    dispatch(setUserLoggedIn(login.success));
    if (!login.success && privatePaths.includes(router.route)) {
      Router.push(`/login?returnUrl=${router.route}`);
    } else {
      setLoading(false);
    }
  }, [router.route]);

  if (loading && !loggedIn) return <p>Loading...</p>;

  return children;
}
