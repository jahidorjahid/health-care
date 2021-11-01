import { React, useEffect, useState } from "react";
import { useParams } from "react-router";

const Single = () => {
  const { newsId } = useParams();
  const API_URL = "/fakedb.json";
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState({});

  useEffect(() => {
    const fetchBusinesses = () => {
      return fetch(API_URL, { method: "GET" })
        .then((res) => {
          return res.json();
        })
        .then((data) => setArticles(data))
        .catch((err) => {
          console.log(err.message);
        });
    };
    fetchBusinesses();
  }, []);

  useEffect(() => {
    const details = articles.find((article) => article.id === parseInt(newsId));
    setArticle(details);
  }, [articles]);

  return (
    <div>
      <div className="container px-5 py-5 my-5 shadow">
        <div className="text-center">
          <img src={article?.img_url} alt="" className="img-fluid rounded" />
        </div>
        <div>
          <h1 className="my-3">{article?.title}</h1>
          Published on <span className="date">{article?.date}</span>
          {" in "}
          <span className="rounded bg-dark text-white px-3 py-0">
            {article?.cat}
          </span>
        </div>
        <div className="mb-5">
          -------------------------------------------------------------
        </div>
        <div>
          <p>{article?.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Single;
