import {
  faEnvelopeOpen,
  faPen,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Contact = () => {
  return (
    <div className="form-box">
      <div className="container">
        <div className="form py-4">
          <h2 className="mb-5">Contact</h2>
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
            <div className="or">Feel free to contact with us</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
