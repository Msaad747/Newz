import React, { useState, useEffect, useCallback } from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";

const News = ({ category, isDark }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  const fetchNews = useCallback(
    async (page) => {
      setLoading(true);
      try {
        let url = `https://newsapi.org/v2/${
          category.cate.toLowerCase() === "everything"
            ? `everything?q=${category.query}&`
            : "top-headlines?"
        }${
          category.cate.toLowerCase() === "everything"
            ? `language=en`
            : "country=us"
        }${
          category.cate.toLowerCase() === "everything"
            ? ""
            : `&category=${category.cate}`
        }&page=${page}&pageSize=6&apiKey=8a878ba3ee08491395a2fc0344064fc8`;

        let api = await fetch(url);
        let data = await api.json();

        if (page === 1) {
          setArticles(data.articles);
        } else {
          setArticles((prev) => [...prev, ...data.articles]);
        }

        setHasNextPage(page < Math.ceil(data.totalResults / 6));
        setPageNo(page);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    },
    [category],
  );

  // Initial fetch on component mount or category change
  useEffect(() => {
    setPageNo(1);
    setArticles([]);
    fetchNews(1);
  }, [category.cate, category.query, fetchNews]);

  // Infinite scroll hook
  const [sentryRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: () => {
      fetchNews(pageNo + 1);
    },
    disabled: !hasNextPage || loading,
  });

  return (
    <div className="container">
      <h1 className={`text-center ${isDark ? " text-light" : " text-dark"}`}>
        Newify {`${category.cate === "Everything" ? "" : "- Top-HeadLines"}`}
        <br />
        {`[ ${category.cate}\n ${
          category.cate === "Everything"
            ? category.query
              ? ` About ${
                  category.query.charAt(0).toUpperCase() +
                  category.query.slice(1)
                }`
              : ""
            : ""
        } ]`}
      </h1>
      <hr
        className={`${isDark ? "bg-light text-dark" : "bg-dark text-light"}  `}
      />

      <div className="row">
        {articles.length > 0 &&
          articles.map((item) => {
            return (
              <div className="col-md-4 article" key={item.url || Math.random()}>
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

      {/* Loading spinner at the bottom */}
      {loading && <Spinner isDark={isDark} />}

      {/* Sentinel element for infinite scroll */}
      <div ref={sentryRef} style={{ textAlign: "center", padding: "20px" }}>
        {!hasNextPage && articles.length > 0 && (
          <p className={isDark ? "text-light" : "text-dark"}>
            No more articles to load
          </p>
        )}
      </div>
    </div>
  );
};

export default News;
