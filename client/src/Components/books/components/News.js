import React, { useEffect, useState } from 'react'

export default function News() {
  const [newsArticles, setNewsArticles] = useState([])


  getArticles = category => {

    if (category) {
      fetch(
        `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=ca5lzlfKxPzmd3XKELbH34GA0RViWrt4`
      )
        .then(response => response.json())
        .then(data => {
          setNewsArticles(data.results);
        })
        .catch(error => {
          console.clear();
          console.log(error)
        });
    } else {
      fetch(
        `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=ca5lzlfKxPzmd3XKELbH34GA0RViWrt4`
      )
        .then(response => response.json())
        .then(data => {
          this.setState({ loading: false, newsArticles: data.results });
        })
        .catch(error => {
          console.clear();
          this.setState({ loadError: true });
        });
    }
  };
  useEffect(() => {
    getArticles()
  }, [])


  return (
    <div>
      <main className="news-display" id="main-content">
        {newsArticles.map(article => {
          return <NewsCard article={article} />;
        })}
      </main>
    </div>
  );

}
