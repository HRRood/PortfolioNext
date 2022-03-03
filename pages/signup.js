import Input from "../components/form/Input";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function signup({}) {
  const { loggedIn } = useSelector((state) => state.global);

  const submitForm = (e) => {
    e.preventDefault();
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
        <h1 className="c-login__title">Create an account</h1>
        <p className="c-login__desc">
          Already have an account? <Link href="/login">Sign in</Link>
        </p>
        <form onSubmit={submitForm}>
          <Input id="email" label="Email" name="email" type="email" />
          <Input id="firstname" label="Firstname" name="firstname" type="text" />
          <Input id="lastname" label="Lastname" name="firstname" type="text" />
          <Input id="password" label="Password" name="password" type="password" />
          <Input id="passwordrepeat" label="Repeat password" name="passwordrepeat" type="password" />
          <button className="c-btn  c-btn--primary fr" type="submit">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}
