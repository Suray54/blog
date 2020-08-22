import { createSelector } from "reselect";

const selectBlog = (state) => state.blog;

export const selectBlogs = createSelector([selectBlog], (blog) => blog.blogs);
//convert into original array
export const selectBlogsForPreview = createSelector(
  [selectBlogs],
  (blogs) => Object.keys(blogs).map((key) => blogs[key])
  //maping on that keys with he values of collection
);
export const selectSingleBlog = (blogUrlParam) =>
  createSelector([selectBlogs], (blogs) => blogs[blogUrlParam]);
