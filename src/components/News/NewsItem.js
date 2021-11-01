import React from "react";

const NewsItem = (props) => {
  const { title, img_url, cat } = props.data;
  return (
    <div className="col-md-6">
      <div className="d-flex justify-content-between">
        <div className="news-img">
          <img src={img_url} alt="" className="img-fluid rounded" />
        </div>
        <div className="news-title">
          <a href="/" className="d-block text-decoration-none">
            {title.slice(0, 46)}
          </a>
          Category: <span className="rounded">{cat}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
