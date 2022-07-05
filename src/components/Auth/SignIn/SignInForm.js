import React, { useState, useRef } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./SignInForm.scss";
import { FaUserAlt, FaLock } from "react-icons/fa";

function SignInForm() {
  const history = useHistory();
  const { logIn } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError(false);
      setLoading(true);
      await logIn(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to sign in");
    }
  }
  console.log(error);

  return (
    <>
      <div className="background">
        <div className="auth-container">
          <div className="auth__top-container">
            <div className="auth-hero-text">
              <h1 className="auth-title">Welcome to SkyBall</h1>
              <div className="auth-image"></div>
              <h2 className="auth-subtitle">
                Toronto's source for local volleyball meetups and clinics so
                that you and your friends' beach volleyball skills can improve,
                together.
              </h2>
            </div>
          </div>
          <div className="auth__bottom-container">
            <h2 className="auth__title">User Login</h2>
            {error && <p>Invalid email and password combination</p>}

            <form onSubmit={handleSubmit}>
              <div className="form__container">
                <div className="form__input-wrapper">
                  <input
                    placeholder="Email"
                    type="email"
                    ref={emailRef}
                  ></input>
                  <FaUserAlt className="form__input-icon" />
                </div>
                <div className="form__input-wrapper">
                  <input
                    placeholder="Password"
                    type="password"
                    ref={passwordRef}
                    required
                  />
                  <FaLock className="form__input-icon" />
                </div>
              </div>
              <div className="auth__buttons">
                <button
                  className="auth__in-button"
                  disabled={loading}
                  type="submit"
                >
                  Log In
                </button>
                <p className="auth__sign-in-text">Don't have an account?</p>
                <Link className="auth__sign-button" to="/signup">
                  Create Account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignInForm;
