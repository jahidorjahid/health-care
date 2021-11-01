import React from "react";
import { Link } from "react-router-dom";

const NewsItem = (props) => {
  const { title, img_url, cat } = props.data;
  const titleToSlug = title.replace(/ /g, "-");

  return (
    <div className="col-md-6">
      <div className="d-flex justify-content-between">
        <div className="news-img">
          <img src={img_url} alt="" className="img-fluid rounded" />
        </div>
        <div className="news-title">
          <Link
            to={"/news/" + titleToSlug}
            className="d-block text-decoration-none"
          >
            {title.slice(0, 46)}
          </Link>
          Category: <span className="rounded">{cat}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
