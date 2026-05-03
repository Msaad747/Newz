import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class News extends Component {
  constructor() {
    super();

    this.state = {
      articles: null,
      loading: true,
      pageNo: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=technology&page=${this.state.pageNo}&pageSize=6&apiKey=8a878ba3ee08491395a2fc0344064fc8`;
    let api = await fetch(url);
    let data = await api.json();
    this.setState({
      articles: data.articles,
      loading: false,
    });
  }
  handleNxt = async () => {
    this.setState({
      loading: true,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=technology&page=${this.state.pageNo + 1}&pageSize=6&apiKey=8a878ba3ee08491395a2fc0344064fc8`;
    let api = await fetch(url);
    let data = await api.json();
    this.setState({
      articles: data.articles,
      loading: false,
      pageNo: this.state.pageNo + 1,
    });
  };
  handlePre = async () => {
    this.setState({
      loading: true,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=technology&page=${this.state.pageNo - 1}&pageSize=6&apiKey=8a878ba3ee08491395a2fc0344064fc8`;
    let api = await fetch(url);
    let data = await api.json();
    this.setState({
      articles: data.articles,
      loading: false,
      pageNo: this.state.pageNo - 1,
    });
  };
  render() {
    const { isDark } = this.props;
    return (
      <div className="container  ">
        <h1 className={`${isDark ? " text-light" : " text-dark"}`}>
          Newify - Todays Latest
        </h1>
        <hr
          className={`${isDark ? "bg-light text-dark" : "bg-dark text-light"}  `}
        />
        {this.state.loading ? (
          <div className={`d-flex justify-content-center mt-4 `}>
            <div
              className={`spinner-border ${isDark ? " text-light" : " text-dark"}`}
              role="status"
            >
              <span
                className={`visually-hidden ${isDark ? "bg-dark " : "bg-light "}`}
              ></span>
            </div>
          </div>
        ) : null}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((item) => {
              return (
                <div
                  className="col-md-4"
                  key={
                    this.state.articles.url
                      ? this.state.articles.url
                      : Math.random()
                  }
                >
                  <NewsItems
                    title={item.title}
                    description={item.description}
                    imgUrl={
                      item.urlToImage
                        ? item.urlToImage
                        : "https://images.digitalfoundry.net/cc15a4cd57510/large.jpg"
                    }
                    newsLink={item.url}
                    isDark={isDark}
                  />
                </div>
              );
            })}
        </div>
        <div className="d-flex justify-content-between mt-4 ">
          <button
            className={`button btn btn-${isDark ? "dark btn-outline-light" : "primary"} `}
            type="button"
            onClick={this.handlePre}
            disabled={this.state.pageNo <= 1}
          >
            &larr; Previous
          </button>

          <button
            className={`button btn btn-${isDark ? "dark btn-outline-light" : "primary"} `}
            type="button"
            onClick={this.handleNxt}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
