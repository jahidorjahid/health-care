import React, { useEffect, useState } from "react";
import "./News.css";
import NewsItem from "./NewsItem";
const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("./fakedb.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div>
      <header>
        <div className="d-flex justify-content-center align-items-center">
          <h2>Our News</h2>
        </div>
      </header>
      <div className="container p-5 my-5">
        <div className="row gy-5">
          {news.map((article) => (
            <NewsItem key={article.id} data={article}></NewsItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
