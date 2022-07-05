import React, { useState, useRef } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { FaUserAlt, FaLock } from "react-icons/fa";
import "./SignUp.scss";

function SignUpForm() {
  const history = useHistory();
  const { signUp } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const passwordConfirmRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(passwordRef.current.value);
    console.log(passwordConfirmRef.current.value);
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError(false);
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
      history.push("/login");
    } catch {
      setError("Failed to create an acccount");
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
                Toronto's source for local volleyball meetups and clinics,
                helping you and your friends improve your beach volleyball
                skills, together.
              </h2>
            </div>
          </div>
          <div className="auth__bottom-container">
            <h2 className="auth__title">Sign Up</h2>

            {error && <p>there is an error</p>}

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
                    type="password"
                    ref={passwordRef}
                    placeholder="Password"
                    required
                  />{" "}
                  <FaLock className="form__input-icon" />
                </div>
                <div className="form__input-wrapper">
                  <input
                    type="password"
                    placeholder="Confirm password"
                    ref={passwordConfirmRef}
                    required
                  ></input>
                  <FaLock className="form__input-icon" />
                </div>
              </div>
              <div className="auth__buttons">
                <button
                  className="auth__in-button"
                  disabled={loading}
                  type="submit"
                >
                  Sign Up
                </button>
                <div className="auth__sign-up--text">
                  Already have an Account?
                </div>
                <Link className="auth__sign-up" to="/login">
                  Log In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpForm;
