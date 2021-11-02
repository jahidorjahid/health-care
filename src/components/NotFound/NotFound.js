import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center my-3">
      <img src="/images/404/404.jpeg" alt="" className="img-fluid" />
      <div className="my-5">
        <Link to="/">
          <button
            className="btn btn-custom"
            style={{ backgroundColor: "#33b0eb" }}
          >
            Go To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
