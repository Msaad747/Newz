import React, { Component } from "react";

export default class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      moreopt: false,
      searchbar: false,
      searchText: "",
    };
  }
  render() {
    const showMoreOpt = (e) => {
      e.stopPropagation();
      this.setState({
        moreopt: !this.state.moreopt,
        searchbar: false,
      });
    };
    const toGetCate = (e) => {
      this.props.setCate({ cate: e.target.innerText });
      this.setState({
        searchbar: false,
      });
    };
    const searchBarAndEverythingTab = (e) => {
      this.props.setCate({
        cate: e.target.innerText,
      });
      this.setState({
        searchbar: true,
      });
    };
    const handleSearchChange = (e) => {
      this.setState({
        searchText: e.target.value,
      });
    };
    const handleSearchClick = () => {
      this.props.setCate({
        cate : false,
        query: this.state.searchText
      })
      
    };

    const { title, isDark, toogleMode } = this.props;
    return (
      <div>
        <nav
          className={`navbar navbar-expand-lg ${isDark ? "navbar-dark bg-dark" : "navbar-light bg-light"} fixed-top`}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              {title}
            </a>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Links&AboutUs
                  </a>
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
                    {!this.state.moreopt && (
                      <li>
                        <button
                          className={`dropdown-item bg-secondary text-light`}
                          onClick={showMoreOpt}
                        >
                          ...
                        </button>
                      </li>
                    )}
                    {this.state.moreopt && (
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
                            Show Less
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
                {!this.state.searchbar && (
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                    style={{ color: isDark ? "#fff" : "#212529" }}
                  >
                    {isDark ? "Disable Dark Mode" : "Enable Dark Mode"}
                  </label>
                )}
              </div>
              {this.state.searchbar && (
                <form className="d-flex">
                  <input
                    className=" me-2 "
                    type="text"
                    value={this.state.searchText}
                    onChange={handleSearchChange}
                  />
                  <button
                    className="btn-dark btn-outline-light"
                    type="button"
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
}
