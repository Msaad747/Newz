import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    const { title, description, imgUrl, newsLink, isDark, author, time } =
      this.props;
    return (
      <div>
        <div className="d-flex justify-content-end ">
          <span
            className={` badge rounded-pill ${isDark ? "bg-danger" : "bg-secondary"} `}
          >
            <b>Source:</b>{" "}
            {`{ ${this.props.source.name ? this.props.source.name.slice(0, 15) : "Unknown Source"}... }`}
          </span>
        </div>
        <div className={`card mb-3 ${isDark ? "border-light" : "border-dark"}`}>
          <img
            src={imgUrl}
            className="card-img-top"
            alt="..."
            style={{ height: "auto" }}
          />
          <div
            className={`card-body ${isDark ? "bg-dark text-light" : "bg-light text-dark "} `}
          >
            <h5 className="card-title">{title ? title : null`...`}</h5>
            <p className="card-text">
              {description ? description : "Click Below To Read More ..."}
            </p>
            <p className="card-text" style={{color:"#c5293eab", cursor:"default"}}>
              <small className="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {time ? new Date(time).toGMTString() : "Random Day"}
              </small>
            </p>

            <a
              href={newsLink ? newsLink : ""}
              target="blank"
              className={`btn ${isDark ? "btn-dark btn-outline-light" : "btn-primary btn-outline-light"}`}
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
