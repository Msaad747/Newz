import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    const { title, isDark,toogleMode } = this.props;
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
                <li className="nav-item dropdown">
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
                  >
                    <li>
                      <a className="dropdown-item" href="/">
                        {"Sports"}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        {"Health"}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        {"Politics"}
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        {"Top Headlines"}
                      </a>
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
                    checked={isDark?true:false}
                  />
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color:isDark?"#fff":"#212529"}}>
                      {isDark?"Disable Dark Mode":"Enable Dark Mode"}
                  </label>
                </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
