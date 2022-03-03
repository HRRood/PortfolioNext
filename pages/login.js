import Input from "../components/form/Input";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ApiManager from "../utils/api/manager";
import Router, { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";

const apiManager = new ApiManager();

export default function index({}) {
  const formRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const submitRef = useRef(null);
  const route = useRouter();
  const returnUrl = route.query.returnUrl || "/";
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const { loggedIn } = useSelector((state) => state.global);

  const EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const resetError = () => {
    setEmailError("");
    setPasswordError("");
  };

  const submitForm = (e) => {
    e.preventDefault();
    resetError();
    if (submitRef.current.disabled) {
      return;
    }
    submitRef.current.disabled = true;
    const form = formRef.current;
    const { email, password } = form.elements;

    const emailValue = email.value?.trim() || null;
    const passwordValue = password.value?.trim() || null;
    let hasError = false;

    if (!emailValue) {
      submitRef.current.disabled = false;
      setEmailError("Email is required");
      hasError = true;
    } else if (!EMAIL_REGEX.test(emailValue)) {
      submitRef.current.disabled = false;
      setEmailError("Invalid email");
      hasError = true;
    }

    if (!passwordValue) {
      submitRef.current.disabled = false;
      setPasswordError("Password is required");
      hasError = true;
    } else if (!PASSWORD_REGEX.test(passwordValue)) {
      submitRef.current.disabled = false;
      setPasswordError("Password must contain atleast be 8 long with 1 uppercase, 1 number, 1 special character");
      hasError = true;
    }

    if (hasError) return;

    apiManager
      .post("/api/auth/login", { username: emailValue, password: passwordValue })
      .then((res) => {
        submitRef.current.disabled = false;
        if (!res.success) return;
        Cookies.set("token", res.meta);

        Router.push(returnUrl);
      })
      .catch((err) => {
        submitRef.current.disabled = false;
      });
  };

  if (loggedIn === null) {
    return <></>;
  }

  if (loggedIn) {
    return (
      <div className="c-login">
        <div className="c-login__content">
          <h1>Already logged in</h1>
          <Link href="/">Go back to home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="c-login">
      <div className="c-login__content">
        <h1 className="c-login__title">Login</h1>
        <p className="c-login__desc">
          Don't have an account yet? <Link href="/signup">Sign up</Link>
        </p>
        <form onSubmit={submitForm} ref={formRef}>
          <Input id="email" label="Email" name="email" type="text" inputRef={emailRef} errorMessage={emailError} changeError={() => setEmailError("")} />
          <Input
            id="password"
            label="Password"
            name="password"
            type="password"
            inputRef={passwordRef}
            errorMessage={passwordError}
            changeError={() => setPasswordError("")}
          />
          <Link href="/password-forgot">Forgot?</Link>
          <button className="c-btn  c-btn--primary fr" type="submit" ref={submitRef}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
