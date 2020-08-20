import React, { Component } from "react";
import "./blogs.styles.scss";
import { Route } from "react-router-dom";
import BlogOverview from "../../components/blog-overview/blog-overview.component";
export default class Blogs extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="blogs">
        <div className="row">
          <div className="col-md-8">
            <Route exact path={`${match.path}`} component={BlogOverview} />
          </div>
          <div className="col-md-4 yellow">
            Side-Bar for both Single and Blogs
          </div>
        </div>
      </div>
    );
  }
}
