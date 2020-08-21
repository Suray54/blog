import React from "react";
import "./blog-overview.styles.scss";
import html from "../../assets/html.jpg";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectBlogBlogs } from "../../redux/blog/blog.selector";

const BlogOverview = ({ blogs }) => (
  <div className="div">
    {blogs.map((blog) => (
      <div className="blog-overview">
        <img src={html} alt="blog-overview__image" />
        <div className="blog-overview__details">
          <div className="blog-overview__details-header">{blog.header}</div>

          <p className="blog-overview__details-detail">{blog.details}</p>
          <div className="blog-overview__details-date">
            <i class="fas fa-calendar-week"></i> {blog.date}
          </div>
          <div className="blog-overview__details-tag">
            <i class="fas fa-folder"></i>
            {blog.tag}
          </div>
        </div>
      </div>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  blogs: selectBlogBlogs,
});

//const mapStateToProps = (state) => ({
// sections: state.directory.sections,
//});

export default connect(mapStateToProps)(BlogOverview);
