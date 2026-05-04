import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    const { title, description, imgUrl, newsLink,isDark ,author,time} = this.props;
    return (
      <div >
        <div  className={`card my-3 mx-3 ${isDark ? "border-light" : "border-dark"}`}>
          <img src={imgUrl} className="card-img-top" alt="..."  style={{height:"auto"}}/>
          <div className={`card-body ${isDark?"bg-dark text-light":"bg-light text-dark "} `} >
            <h5 className="card-title">{title ? title.slice(0, 50) : ""}...</h5>
            <p className="card-text">
              {description ? description.slice(0, 88) : "Click Below To Read More"}...
            </p>
            <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {time?new Date(time).toGMTString():"Random Day"}</small></p>
            <div className="d-flex justify-content-between align-items-center">
              <a href={newsLink?newsLink:""} target="blank" className={`btn ${isDark?"btn-dark btn-outline-light":"btn-primary btn-outline-light"}`}>
                Read More
              </a>
              <span style={{fontFamily:"monospace",fontSize:14}}className=""><b>Source:</b> {`{ ${this.props.source.name?this.props.source.name:"Unknown Source"} }`}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
