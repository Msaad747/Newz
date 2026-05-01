import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    const { title, description, imgUrl, newsLink } = this.props;
    return (
      <div>
        <div className="card my-3" style={{ width: "18rem" }}>
          <img src={imgUrl?imgUrl:""} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title ? title.slice(0, 50) : ""}...</h5>
            <p className="card-text">
              {description ? description.slice(0, 88) : ""}...
            </p>
            <a href={newsLink?newsLink:""} target="-blank" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
