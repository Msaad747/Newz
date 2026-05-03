import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    const { title, description, imgUrl, newsLink,isDark } = this.props;
    return (
      <div>
        <div  className={`card my-3 mx-3 ${isDark ? "border-light" : "border-dark"}`} style={{ width: "380px",height:"450.60px" }}>
          <img src={imgUrl?imgUrl:""} className="card-img-top" alt="..." style={{ height:"230.30px" }}/>
          <div className={`card-body ${isDark?"bg-dark text-light":"bg-light text-dark "} `} style={{ height:"200.30px" }}>
            <h5 className="card-title">{title ? title.slice(0, 50) : ""}...</h5>
            <p className="card-text">
              {description ? description.slice(0, 88) : "Click Below To Read More"}...
            </p>
            <a href={newsLink?newsLink:""} target="blank" className={`btn ${isDark?"btn-dark btn-outline-light":"btn-primary btn-outline-light"}`}>
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
