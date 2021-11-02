import { React } from "react";
import { Link } from "react-router-dom";

const NewsItem = ({ data }) => {
  const { id, title, date, cat, img_url } = data;
  return (
    <div className="col-md-4">
      <div className="card overflow-hidden rounded shadow">
        <div className="overflow-hidden">
          <img className="img-fluid" src={img_url} alt="" />
        </div>
        <div className="card-body">
          <span className="date"> {date}</span>{" "}
          <span className="category"> {cat}</span>
          <Link to={`/news/${id}`} className="card-title">
            {title}
          </Link>
          <p className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
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
