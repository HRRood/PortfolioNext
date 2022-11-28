import { useEffect, useState } from "react";
import Router from "next/router";
export default function useUser({ redirectIfNotFound = "", redirectIfFound = "", redirect = false } = {}) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch("/api/auth")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);

        if (!data || !data.isLoggedIn || !data.success) {
          if (redirect) {
            return Router.push(redirectIfNotFound || "/login");
          }
        }

        setUserData(data.data);
      });

    // if no redirect needed, just return (example: already on /dashboard)
    // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet
  }, []);

  return { loading, userData };
}
