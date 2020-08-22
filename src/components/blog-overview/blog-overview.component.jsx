import React from "react";
import "./blog-overview.styles.scss";
import html from "../../assets/html.jpg";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectBlogsForPreview } from "../../redux/blog/blog.selector";

const BlogOverview = ({ blogs, match, history }) => (
  <div className="div">
    <div className="blogs__header">
      <h2>Blog</h2>
      <p>
        Everyday thoughts are presented here, <br />
        Graphic Design, UI/UX, Web Design and Developement.
      </p>
    </div>
    {blogs.map((blog) => (
      <div key={blog.id} className="blog-overview">
        <img src={html} alt="blog-overview__image" />
        <div className="blog-overview__details">
          <div
            onClick={() => history.push(`${blog.title.toLowerCase()}`)}
            className="blog-overview__details-header"
          >
            {blog.header}
          </div>

          <p className="blog-overview__details-detail">{blog.details}</p>
          <div className="blog-overview__details-date">
            <i className="fas fa-calendar-week"></i> {blog.date}
          </div>
          <div className="blog-overview__details-tag">
            <i className="fas fa-folder"></i>
            {blog.tag}
          </div>
        </div>
      </div>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  blogs: selectBlogsForPreview,
});

export default withRouter(connect(mapStateToProps)(BlogOverview));
