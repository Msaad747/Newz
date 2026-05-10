import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";

export class News extends Component {
  constructor() {
    super();

    this.state = {
      articles: null,
      loading: true,
      pageNo: 1,
    };
  }
  fetchNews = async () => {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/${this.props.category.cate.toLowerCase() === "everything" ? `everything?q=${this.props.category.query}&` : "top-headlines?"}${this.props.category.cate.toLowerCase() === "everything" ? `language=en` : "country=us"}${this.props.category.cate.toLowerCase() === "everything" ? "" : `&category=${this.props.category.cate}`}&page=${this.state.pageNo}&pageSize=6&apiKey=8a878ba3ee08491395a2fc0344064fc8`;
    let api = await fetch(url);
    let data = await api.json();
    this.setState({
      articles: data.articles,
      loading: false,
    });
  };

   componentDidMount() {
    this.fetchNews();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.category.cate !== this.props.category.cate || 
        prevProps.category.query !== this.props.category.query) {
      this.setState({ pageNo: 1 }, () => {
        this.fetchNews();
      });
    }
  }
  handleNxt = async () => {
    await this.setState({
      pageNo: this.state.pageNo + 1,
    });
    this.fetchNews();
  };
  handlePre = async () => {
    await this.setState({
      pageNo: this.state.pageNo - 1,
    });
    this.fetchNews();
  };
  render() {
    const { isDark } = this.props;
    return (
      <div className="container  ">
        <h1 className={`text-center ${isDark ? " text-light" : " text-dark"}`}>
          Newify  {`${this.props.category.cate==="Everything"?"":"- Top-HeadLines"}`}
          <br />
          {`[ ${this.props.category.cate}\n ${this.props.category.query?` About ${this.props.category.query}`:""} ]`}
        </h1>
        <hr
          className={`${isDark ? "bg-light text-dark" : "bg-dark text-light"}  `}
        />
        {this.state.loading ? <Spinner isDark={isDark} /> : null}
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
                    author={item.author}
                    time={item.publishedAt}
                    source={item.source}
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
