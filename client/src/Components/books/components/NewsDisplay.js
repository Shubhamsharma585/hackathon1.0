import React, { Component } from "react";
import NewsCard from "./NewsCard";


class NewsDisplay extends Component {
  state = { loading: true, loadError: false, newsArticles: [] };

  getArticles = category => {
    /*Checks for url paramater and gets news for that category.
     * if no paramater provided defaults to home page news */
    if (category) {
      fetch(
        `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=ca5lzlfKxPzmd3XKELbH34GA0RViWrt4`
      )
        .then(response => response.json())
        .then(data => {
          this.setState({ loading: false, newsArticles: data.results });
        })
        .catch(error => {
          console.clear();
          this.setState({ loadError: true });
        });
    } else {
      fetch(
        `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=ca5lzlfKxPzmd3XKELbH34GA0RViWrt4`
      )
        .then(response => response.json())
        .then(data => {
          console.log(data.results)
          this.setState({ loading: false, newsArticles: data.results });
        })
        .catch(error => {
          // console.clear();
          this.setState({ loadError: true });
        });
    }
  };
  componentDidMount() {
    this.getArticles(this.props["*"]);
  }
  componentDidUpdate(prevProps) {
    if (prevProps["*"] !== this.props["*"]) {
      //clear any errors that may have occured during previous fetch attempt
      this.setState({ loadError: false });

      this.getArticles(this.props["*"]);
    }
  }
  render() {
    let { loading, loadError, newsArticles } = this.state;
    //If the data was successfully fetched render news
    if (!loading && !loadError) {
      return (
        <main className="news-display" id="main-content">
          {newsArticles.map(article => {
            return <NewsCard article={article} />;
          })}
        </main>
      );
    } else if (loadError) {
      return <p>Failed to load content.</p>;
    } else {
      return <p>Loading...</p>;
    }
  }
}

export default NewsDisplay;
