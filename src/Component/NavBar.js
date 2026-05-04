import React, { Component } from "react";

export default class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      moreopt: false,
    };
  }
  render() {
    const showMoreOpt = (e) => {
      e.stopPropagation();
      this.setState({
        moreopt: !this.state.moreopt,
      });
    };
    const toGetCate = (e) => {
      this.props.setCate(e.target.innerText);
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
                      <span className="dropdown-item" style={{cursor:"default",}}>
                        Top Headlines
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onChange={toogleMode}
                  checked={isDark ? true : false}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                  style={{ color: isDark ? "#fff" : "#212529" }}
                >
                  {isDark ? "Disable Dark Mode" : "Enable Dark Mode"}
                </label>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
