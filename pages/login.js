import Input from "../components/form/Input";
import Link from "next/link";

export default function index({}) {
  const submitForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className="c-login">
      <div className="c-login__content">
        <h1 className="c-login__title">Login</h1>
        <p className="c-login__desc">
          Don't have an account yet? <Link href="/signup">Sign up</Link>
        </p>
        <form onSubmit={submitForm}>
          <Input id="email" label="Email" name="email" type="email" />
          <Input id="password" label="Password" name="password" type="password" />
          <Link href="/password-forgot">Forgot?</Link>
          <button className="c-btn  c-btn--primary fr" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
