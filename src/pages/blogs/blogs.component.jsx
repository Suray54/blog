import React, { Component } from "react";
import "./blogs.styles.scss";
import { Route } from "react-router-dom";
import BlogOverview from "../../components/blog-overview/blog-overview.component";
export default class Blogs extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="blogs">
        <div className="blogs__header">
          <h2>Blog</h2>
          <p>
            Everyday thoughts are presented here, <br />
            Graphic Design, UI/UX, Web Design and Developement.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-9">
            <Route exact path={`${match.path}`} component={BlogOverview} />
          </div>
          <div className="col-lg-3 yellow">Side-Bar</div>
        </div>
      </div>
    );
  }
}
