import {
  faEnvelopeOpen,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RegisterForm = () => {
  const {
    handleNameChange,
    handleEmailChnage,
    handlePassChnage,
    handleRegister,
    loginWithGoogle,
    error,
  } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const handleGglLogin = () => {
    loginWithGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };

  return (
    <div>
      <div className="form-box">
        <div className="container">
          <h1 className="text-danger text-center my-4">{error}</h1>
          <div className="form py-4">
            <h2 className="mb-5">Register</h2>
            <form onSubmit={handleRegister}>
              <div className="form-floating mb-3">
                <input
                  onBlur={handleNameChange}
                  type="text"
                  className="form-control rounded-3"
                  id="floatingText"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingText">
                  <FontAwesomeIcon
                    style={{ color: "#1A2BA8" }}
                    className="me-1"
                    icon={faUser}
                  />{" "}
                  Your Name
                </label>
              </div>
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
                value="Register"
              />
              <div className="or">----------------- OR -----------------</div>
              <div
                onClick={handleGglLogin}
                className="googleBtn d-flex align-items-center justify-content-between"
                style={{ width: "235px" }}
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
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
