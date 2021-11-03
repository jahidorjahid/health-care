import React from "react";
import { Link } from "react-router-dom";

const RecentPost = (props) => {
  const { id, img_url, title, date } = props.data;
  return (
    <div className="d-flex gx-4">
      <div className="flex-shrink-0">
        <img src={img_url} alt="" className="img-fluid" />
      </div>
      <div className="flex-grow-1 ms-3">
        <Link to={`/news/${id}`} className="text-decoration-none">
          <p className="title">{title}</p>
        </Link>

        <a href="/" className="date">
          {date}
        </a>
      </div>
    </div>
  );
};

export default RecentPost;
