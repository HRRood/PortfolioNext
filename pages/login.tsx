import Input from "../components/form/Input";
import Link from "next/link";
import React, { useContext, useState } from "react";
import Router from "next/router";
import { AppContext } from "../contexts/AppContext";

export default function index({}) {
  const { setUser } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitForm = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (email === "" || password === "") {
      return;
    }

    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setUser(res.data);
          Router.push("/");
        }
      });
  };
  return (
    <div className="c-login">
      <div className="c-login__content">
        <h1 className="c-login__title">Login</h1>
        <p className="c-login__desc">
          Don't have an account yet? <Link href="/signup">Sign up</Link>
        </p>
        <Input
          id="email"
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required={true}
        />
        <Input
          id="password"
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required={true}
        />
        <Link href="/password-forgot">Forgot password?</Link>
        <button className="c-btn  c-btn--primary fr" type="submit" onClick={submitForm}>
          Login
        </button>
      </div>
    </div>
  );
}
