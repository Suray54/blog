import React from "react";
import { connect } from "react-redux";
import "./blog-single.styles.scss";
import { selectSingleBlog } from "../../redux/blog/blog.selector";
import html from "../../assets/html.jpg";
const BlogSingle = ({ blog, match }) => {
  console.log(match);
  return (
    <div className="blog-single">
      <img src={html} alt="blog-overview__image" className="blog-single__img" />
      <h1 className="blog-single__header"> {blog.header}</h1>
      <div className="blog-single__display">
        <div className="blog-single__display-date">
          <i className="fas fa-calendar-week"></i> {blog.date}
        </div>
        <div className="blog-single__display-tag">
          <i className="fas fa-folder"></i>
          {blog.tag}
        </div>
      </div>
      <p className="blog-single__detail"> {blog.details}</p>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  blog: selectSingleBlog(ownProps.match.params.blogId)(state),
});
export default connect(mapStateToProps)(BlogSingle);
