import { createSlice } from "@reduxjs/toolkit";

function findIndex(array, id) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === id) return i;
  }
  return null;
}
export const BlogSlice = createSlice({
  name: "blogs",
  initialState: [],
  reducers: {
    saveAllBlogs: (state, actions) => {
      return actions.payload; //default the data will be in payload object so we are accessing as a action.payload
      //return will return the data and update the initialState
    },
    deleteBlog: (state, actions) => {
      let id = actions.payload;
      let index = findIndex(state, id);
      state.splice(index, 1);
    },
    toggleBlog: (state, actions) => {
      let id = actions.payload.id;
      let i = findIndex(state, id);
      if (i !== null) state[i].status = !state[i].status;
    },
  },
});
export const { saveAllBlogs, deleteBlog, toggleBlog } = BlogSlice.actions;
export default BlogSlice.reducer;
