import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { React, useEffect, useState } from "react";
import {} from "react-bootstrap";
import "./Footer.css";
import RecentPost from "./RecentPost";

const Footer = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("./fakedb.json")
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div>
      <div className="footer pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h2 className="mb-5">Health Care</h2>
              <p>
                Health care refers to the efforts that medical professionals
                make to restore our physical and mental well-being. The term
                also includes the provision of services to maintain emotional
                well-being.
              </p>
              <p>Phone: 01611023881</p>
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
              {news.slice(0, 3).map((post) => (
                <RecentPost data={post}></RecentPost>
              ))}
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
                  <a href="/" className="btn book-btn rounded mt-3">
                    Book Appointment
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <p className="pb-3 mb-0">
            &copy; 2021 - All rights reservered by Health Care
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
