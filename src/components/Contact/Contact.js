import {
  faEnvelopeOpen,
  faPen,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Contact = () => {
  return (
    <div>
      <header>
        <div className="d-flex justify-content-center align-items-center">
          <h2>Contact</h2>
        </div>
      </header>
      <div className="form-box">
        <div className="container">
          <div className="form py-4">
            <h5 className="mb-5">Feel free to contact with us</h5>
            <form>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control rounded-3"
                  id="floatingInput"
                  placeholder="Mr Jhon"
                />
                <label htmlFor="floatingInput">
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
                  type="textarea"
                  className="form-control rounded-3"
                  placeholder="Type your own message"
                  style={{ height: "250px" }}
                />
                <label>
                  <FontAwesomeIcon
                    style={{ color: "#1A2BA8" }}
                    className="me-1"
                    icon={faPen}
                  />{" "}
                  Message
                </label>
              </div>
              <input
                type="submit"
                className="btn mt-4 auth-button"
                value="Send Message"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
