/**
 * News Component - Main News Display and Fetching
 * 
 * Responsibilities:
 * - Fetches news articles from NewsAPI based on category
 * - Displays articles in a responsive grid layout
 * - Implements infinite scroll to load more articles
 * - Shows loading spinner during data fetching
 * - Handles pagination and article filtering
 * 
 * Features:
 * - Dynamic category filtering
 * - Infinite scroll pagination
 * - Responsive layout with Bootstrap
 * - Dark/Light theme support
 * - Error handling for API failures
 */

import React, { useState, useEffect, useCallback } from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";

/**
 * News Component - Fetches and displays news articles
 * @param {Object} props - Component props
 * @param {Object} props.category - Selected news category and query
 * @param {boolean} props.isDark - Dark mode flag
 * @param {string} props.apikey - NewsAPI.org API key
 * @param {boolean} props.showEmpty - Flag to show empty page for invalid URL combinations
 * @param {string} props.errorMessage - Error message to display when URL is invalid
 * @returns {JSX.Element} News grid with infinite scroll or empty state
 */
const News = ({ category, isDark, apikey, showEmpty, errorMessage }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  /**
   * Fetches news articles from NewsAPI
   * Constructs appropriate API URL based on category and pagination
   * Handles both category-based (top-headlines) and search-based (everything) queries
   * @param {number} page - Page number for pagination
   */
  const fetchNews = useCallback(
    async (page) => {
      setLoading(true);
      try {
        let url = `https://newsapi.org/v2/${
          category.cate.toLowerCase() === "everything"
            ? `everything?q=${category.query || "general"}&`
            : "top-headlines?"
        }${
          category.cate.toLowerCase() === "everything"
            ? `language=en`
            : "country=us"
        }${
          category.cate.toLowerCase() === "everything"
            ? ""
            : `&category=${category.cate}`
        }&page=${page}&pageSize=6&apiKey=${apikey}`;

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
    [category, apikey],
  );

  /**
   * Effect Hook - Fetches news when category or query changes
   * Resets pagination and articles list before fetching new data
   */
  useEffect(() => {
    setPageNo(1);
    setArticles([]);
    fetchNews(1);
  }, [category.cate, category.query, fetchNews]);

  /**
   * Infinite Scroll Implementation
   * Automatically loads next page when user scrolls to bottom
   * Disabled when no more pages available or data is loading
   */
  const [sentryRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: () => {
      fetchNews(pageNo + 1);
    },
    disabled: !hasNextPage || loading,
  });

  return (
    <>
      {/* Show empty page if invalid URL combination detected */}
      {showEmpty ? (
        <div className="container" style={{ paddingTop: "100px", textAlign: "center" }}>
          <h2 className={isDark ? "text-light" : "text-dark"}>
            No Results
          </h2>
          <p className={isDark ? "text-light" : "text-dark"}>
            {errorMessage || "Invalid parameters. Please check your URL."}
          </p>
        </div>
      ) : (
        <div className="container">
          <h1
            className={`text-center ${isDark ? " text-light" : " text-dark"}`}
            style={{ fontFamily: "Times NEw Roman" }}
          >
            Newify {`${category.cate === "Everything" ? "" : "- Top-Headlines"}`}
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
                <div
                  className="col-md-4 article"
                  key={item.url || Math.random()}
                >
                  <NewsItems
                    title={item.title}
                    description={item.description}
                    imgUrl={
                      item.urlToImage
                        ? item.urlToImage
                        : "https://www.pngkey.com/png/detail/61-615210_red-learn-more-button-please-read-me.png"
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

        {/* Display loading spinner while fetching data */}
        {loading && <Spinner isDark={isDark} />}

        {/* Sentinel element for infinite scroll - triggers onLoadMore when in view */}
        <div ref={sentryRef} style={{ textAlign: "center", padding: "20px" }}>
          {!hasNextPage && articles.length > 0 && (
            <p className={isDark ? "text-light" : "text-dark"}>
              No more articles to load
            </p>
          )}
        </div>
        </div>
      )}
    </>
  );
};

export default News;
