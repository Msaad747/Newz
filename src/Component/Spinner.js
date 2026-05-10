import React, { Component } from 'react'

export default class Spinner extends Component {
  render() {
    const {isDark,}=this.props;
    return (
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
    )
  }
}
