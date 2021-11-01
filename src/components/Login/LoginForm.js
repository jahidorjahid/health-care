import { faEnvelopeOpen, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import "./Login.css";
import useAuth from "../../hooks/useAuth";

const LoginForm = () => {
  const { loginWithGoogle } = useAuth();

  const location = useLocation();
  let history = useHistory();
  const redirectURL = location.state?.from || "/";

  const processLogin = () => {
    loginWithGoogle()
      .then((result) => {
        history.push(redirectURL);
      })
      .catch((err) => console.log(err.message));
  };

  const handleEmailChnage = () => {
    return;
  };
  const handlePassChnage = () => {
    return;
  };

  const error = "";
  return (
    <div className="form-box">
      <div className="container">
        <h1 className="text-danger text-center my-4">{error}</h1>
        <div className="form py-4">
          <h2 className="mb-5">Login</h2>
          <form onSubmit={processLogin}>
            <div className="form-floating mb-3">
              <input
                onBlur={handleEmailChnage}
                type="email"
                className="form-control rounded-3"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">
                <FontAwesomeIcon
                  style={{ color: "#1A2BA8" }}
                  className="me-1"
                  icon={faEnvelopeOpen}
                />{" "}
                Your Email
              </label>
            </div>
            <div className="form-floating">
              <input
                onBlur={handlePassChnage}
                type="password"
                className="form-control rounded-3"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">
                <FontAwesomeIcon
                  style={{ color: "#1A2BA8" }}
                  className="me-1"
                  icon={faLock}
                />{" "}
                Your Password
              </label>
            </div>
            <input
              type="submit"
              className="btn mt-4 auth-button"
              value="Login"
            />
            <div className="or">----------------- OR -----------------</div>
            <div
              onClick={processLogin}
              className="googleBtn d-flex align-items-center justify-content-center align-items-center gx-2"
            >
              <div className="google-icon-wrapper">
                <img
                  className="google-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt=""
                />
              </div>
              <span className="btn-text">
                <b>Sign in with google</b>
              </span>
            </div>
          </form>
          <p className="toggleText mt-4">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
