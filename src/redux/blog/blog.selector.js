import { createSelector } from "reselect";

const selectBlog = (state) => state.blog;

export const selectBlogBlogs = createSelector(
  [selectBlog],
  (blog) => blog.blogs
);
