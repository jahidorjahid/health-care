import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {} from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h2 className="mb-5">Health Care</h2>
              <p>
                Ut wisi enim ad minim veniam, quis laore nostrud exerci tation
                ulm hedi corper turet suscipit lobortis nisl ut aliquip erat
                volutpat Exerci tation
              </p>
              <p>Phone: 97987979789</p>
              <p>Address: Sylhet, Bangladesh</p>
              <div className="d-flex justify-content-between w-25">
                <FontAwesomeIcon icon={faFacebook} className="social-icon" />
                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
                <FontAwesomeIcon icon={faYoutube} className="social-icon" />
              </div>
            </div>
            <div className="col-lg-4 posts">
              <h5 className="mb-5">Recent Posts</h5>
              <div className="d-flex gx-4">
                <div class="flex-shrink-0">
                  <img
                    src="https://housemed.qodeinteractive.com/wp-content/uploads/2018/05/blog-post-img-6-150x150.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="flex-grow-1 ms-3">
                  <p className="title">4 way to use virtual care</p>
                  <a href="/" className="date">
                    23 Jun 2021
                  </a>
                </div>
              </div>
              <div className="d-flex gx-4">
                <div class="flex-shrink-0">
                  <img
                    src="https://housemed.qodeinteractive.com/wp-content/uploads/2018/05/blog-post-img-6-150x150.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="flex-grow-1 ms-3">
                  <p className="title">4 way to use virtual care</p>
                  <a href="/" className="date">
                    23 Jun 2021
                  </a>
                </div>
              </div>
              <div className="d-flex gx-4">
                <div class="flex-shrink-0">
                  <img
                    src="https://housemed.qodeinteractive.com/wp-content/uploads/2018/05/blog-post-img-6-150x150.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div className="flex-grow-1 ms-3">
                  <p className="title">4 way to use virtual care</p>
                  <a href="/" className="date">
                    23 Jun 2021
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="card text-center"
                style={{ width: "18rem", backgroundColor: "#2a2d3b" }}
              >
                <div className="card-body">
                  <FontAwesomeIcon icon={faClock} className="faClock" />
                  <ul className="list-group">
                    <li className="list-group-item">MONDAY 08am - 12pm</li>
                    <li className="list-group-item">TUESDAY 01am - 5pm</li>
                    <li className="list-group-item">WEDNESDAY Free day</li>
                    <li className="list-group-item">THURSDAY 08am - 12pm</li>
                    <li className="list-group-item">FRIDAY 08am - 12pm</li>
                    <li className="list-group-item">
                      SATURDAY - SUNDAY Closed
                    </li>
                  </ul>
                  <a href="/" class="btn book-btn rounded mt-3">
                    Book Appointment
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <p className="pb-3">
            &copy; 2021 - All rights reservered by Health Care
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
