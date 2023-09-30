import { createSlice } from "@reactjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
  },
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    editPost: (state, action) => {
      const { id, updatedCount } = action.payload;
      const postToEdit = state.posts.find((post) => post.id === id);
      if (postToEdit) {
        postToEdit.content = updatedCount;
      }
    },
    deletePost: (state, action) => {
      const idToDelete = action.payload;
      state.posts = state.posts.filter((post) => post.id !== idToDelete);
    },
  },
});

export const { addPost, editPost, deletePost } = postSlice.actions;
export default postSlice.reducer;
  