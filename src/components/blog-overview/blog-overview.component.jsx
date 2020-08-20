import React, { Component } from "react";
import "./blog-overview.styles.scss";
import html from "../../assets/html.jpg";

export default class BlogOverview extends Component {
  render() {
    return (
      <div className="blog-overview">
        <img src={html} alt="blog-overview__image" />
        <div className="blog-overview__details">
          <div className="blog-overview__details-header">
            RoadMap of Front-End Developer
          </div>
          <p className="blog-overview__details-detail">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti,
            minima magnam harum deleniti hic suscipit optio praesentium officiis
            dolor. Reprehenderit dignissimos nisi illum libero vel asperiores
            alias unde. Odit, repellat?
          </p>
          <div className="blog-overview__details-date">
            <i class="fas fa-calendar-week"></i> 2020/8/20
          </div>
          <div className="blog-overview__details-tag">
            <i class="fas fa-folder"></i>web developement
          </div>
        </div>
      </div>
    );
  }
}
