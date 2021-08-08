import React from "react";
import "./NewsCard.css";


const NewsCard = ({ article }) => {
  return (
    <article className="news-card" key={article.title}>
      <div className="img-container">
        <a href={article.url}>
          <img
            className="test-img"
            alt={article.title}
            src={
              article.multimedia[3]
                ? article.multimedia[3].url.replace("210", "440")
                : "https://via.placeholder.com/440x293?text=No+Image+Provided"
            }
          />
        </a>
      </div>
      <a href={article.url}>
        <h2>{article.title}</h2>
      </a>
      <p>{article.abstract}</p>
      <p className="byline">{article.byline}</p>
    </article>
  );
};

export default NewsCard;
