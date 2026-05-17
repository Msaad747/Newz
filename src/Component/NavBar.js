/**
 * NavBar Component - Navigation and Search Interface
 * 
 * Provides:
 * - Navigation links (Home, About, Privacy Policy)
 * - News category dropdown selector
 * - Dynamic search functionality with Everything tab
 * - Dark/Light mode toggle
 * - URL-based state management for categories and searches
 * 
 * Props:
 * - title: App title (Newzify)
 * - isDark: Boolean flag for dark mode
 * - toogleMode: Function to switch between light/dark theme
 * - setCate: Function to update news category
 * - keyGen: Function to trigger component re-renders
 */

import React, { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

/**
 * Navigation Bar Component
 * @param {Object} props - Component props containing theme and navigation handlers
 * @returns {JSX.Element} Navigation bar with search and theme toggle
 */
export default function NavBar(props) {
  const [searchbar, setSearchBar] = useState(false);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  /**
   * Effect Hook - Show search bar when URL has query parameter
   * Displays search input and pre-fills it with the query value from URL
   */
  useEffect(() => {
    const queryParam = searchParams.get("q");
    const categoryParam = searchParams.get("category");
    if (queryParam || categoryParam === "everything") {
      setSearchBar(true);
      setSearchText(queryParam);
    }
    if(props.showEmpty) {
      setSearchBar(false);
      setSearchText("");
    }
    
  }, [searchParams,props.showEmpty]);

  /**
   * Handles category selection from dropdown
   * Updates category state and navigates to URL with category parameter
   * @param {Event} e - Click event from category button
   */
  const toGetCate = (e) => {
    const category = e.target.innerText;
    props.setCate({ 
      cate: category,
      query: ""
    });
    setSearchBar(false);
    props.keyGen(Math.random());
    navigate(`/?category=${category.toLowerCase()}`);
  };
  /**
   * Handles Everything tab click
   * Shows search bar and sets category to 'Everything' for broad searches
   * @param {Event} e - Click event from Everything button
   */
  const searchBarAndEverythingTab = (e) => {
    props.setCate({
      cate: "Everything",
      query: ""
    });
    setSearchBar(true);
    props.keyGen(Math.random());
    navigate("/?category=everything");
  };
  /**
   * Updates search text as user types
   * @param {Event} e - Change event from search input
   */
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };
  /**
   * Triggers search when user presses Enter key
   * @param {Event} e - Keyboard event from search input
   */
  const handleSearchKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearchClick(e);
    }
  };
  /**
   * Performs search and updates URL with search query
   * Sets category to 'Everything' and adds query parameter to URL
   * @param {Event} e - Click event from search button
   */
  const handleSearchClick = (e) => {
    e.preventDefault();
    props.setCate({
      cate: "Everything",
      query: searchText,
    });
    props.keyGen(searchText);
    navigate(`/?category=everything&q=${searchText}`);
  };
  const { title, isDark, toogleMode } = props;
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg ${isDark ? "navbar-dark bg-dark" : "navbar-light bg-light"} fixed-top`}
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              props.setCate({ cate: "General" });
              setSearchBar(false);
              navigate("/");
            }}
            to="/"
          >
            {title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={(e) => {
                    props.setCate({ cate: "General" });
                    setSearchBar(false);
                    navigate("/");
                  }}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  to="/about"
                >
                  AboutUs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  to="/privacy_policy"
                >
                  Privacy Policy
                </Link>
              </li>

              <li className="nav-item dropdown" data-bs-auto-close="inside">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                  data-bs-auto-close="inside"
                >
                  <li>
                    <button className="dropdown-item" onClick={toGetCate}>
                      General
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={toGetCate}>
                      Health
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={toGetCate}>
                      Sports
                    </button>
                  </li>

                  <li>
                    <button className="dropdown-item" onClick={toGetCate}>
                      Technology
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={toGetCate}>
                      Business
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={toGetCate}>
                      Science
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={toGetCate}>
                      Entertainment
                    </button>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <span
                      className="dropdown-item"
                      style={{ cursor: "default" }}
                    >
                      Top Headlines
                    </span>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link"
                  onClick={searchBarAndEverythingTab}
                  style={{ cursor: "pointer" }}
                >
                  Everything
                </span>
              </li>
            </ul>
            <div className={`form-check form-switch mx-3`}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onChange={toogleMode}
                checked={isDark ? true : false}
              />
              {searchbar && (
                <>
                  <label
                    htmlFor="flexSwitchCheckDefault"
                    className={`${isDark ? "text-light" : "text-dark"}`}
                    style={{ fontSize: "12px" }}
                  >
                    Dark mode
                  </label>
                </>
              )}

              {!searchbar && (
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                  style={{ color: isDark ? "#fff" : "#212529" }}
                >
                  {isDark ? "Disable Dark Mode" : "Enable Dark Mode"}
                </label>
              )}
            </div>
            {searchbar && (
              <form className="d-flex">
                <input
                  className={` form-control me-2  ${isDark ? "bg-dark text-light border-light" : "bg-light text-dark border-success"}`}
                  type="text"
                  id="searchInput"
                  value={searchText}
                  onChange={handleSearchChange}
                  onKeyPress={handleSearchKeyPress}
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  type="submit"
                  className={`btn btn-outline-${isDark ? "light" : "success"}`}
                  onClick={handleSearchClick}
                >
                  Search
                </button>
              </form>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
