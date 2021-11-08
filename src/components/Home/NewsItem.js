import { React } from "react";
import { Link } from "react-router-dom";

const NewsItem = ({ data }) => {
  const { id, title, content, date, cat, img_url } = data;
  return (
    <div className="col-md-4">
      <div className="card overflow-hidden rounded shadow">
        <div className="overflow-hidden">
          <img height="250px" width="100%" src={img_url} alt="" />
        </div>
        <div className="card-body">
          <span className="date"> {date}</span>{" "}
          <span className="category"> {cat}</span>
          <Link to={`/news/${id}`} className="card-title">
            {title}
          </Link>
          <p className="card-text">{content.slice(0, 150)}</p>
          <p className="card-text">
            <Link to={`/news/${id}`} className="text-muted read-more">
              Ream More &gt;
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
