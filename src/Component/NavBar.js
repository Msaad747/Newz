import React, { useState } from "react";

export default function NavBar(props) {
  const [moreopt, setMoreOpt] = useState(false);
  const [searchbar, setSearchBar] = useState(false);
  const [searchText, setSearchText] = useState("");

  const showMoreOpt = (e) => {
    e.stopPropagation();
    setMoreOpt((prev) => !prev);
    setSearchBar(false);
  };
  const toGetCate = (e) => {
    props.setCate({ cate: e.target.innerText });

    setSearchBar(false);
    props.keyGen(Math.random());
  };
  const searchBarAndEverythingTab = (e) => {
    props.setCate({
      cate: e.target.innerText,
    });
    setSearchBar(true);
    props.keyGen(Math.random());
  };
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };
  const handleSearchKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearchClick(e);
    }
  };
  const handleSearchClick = (e) => {
    e.preventDefault();
    props.setCate({
      cate: "Everything",
      query: searchText,
    });
    props.keyGen(Math.random());
  };
  const { title, isDark, toogleMode } = props;
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg ${isDark ? "navbar-dark bg-dark" : "navbar-light bg-light"} fixed-top`}
      >
        <div className="container-fluid">
          <span
            className="navbar-brand"
            style={{ cursor: "pointer" }}
            onClick={() => {
              props.setCate({ cate: "General" });
              setSearchBar(false);
              props.keyGen(Math.random());
            }}
          >
            {title}
          </span>
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
                <span className="nav-link"
                style={{cursor:"pointer"}}
                //  onClick={props.setTabs(true)}
                 >
                  Links&AboutUs
                </span>
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
                  {!moreopt && (
                    <li>
                      <button
                        className={`dropdown-item bg-secondary text-light`}
                        onClick={showMoreOpt}
                      >
                        Show More...
                      </button>
                    </li>
                  )}
                  {moreopt && (
                    <>
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
                        <button
                          className={`dropdown-item bg-secondary text-light`}
                          onClick={showMoreOpt}
                        >
                          Show Less...
                        </button>
                      </li>
                    </>
                  )}

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
                  <small
                    className={`${isDark ? "text-light" : "text-dark"}`}
                    style={{ fontSize: "12px" }}
                  >
                    Dark mode
                  </small>
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
                  className=" form-control me-2 "
                  type="text"
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
