// PostForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../postSlice";

const PostForm = () => {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (content.trim() === "") return;
    dispatch(addPost({ id: Date.now(), content }));
    setContent("");
  };

  return (
    <div>
    <h2>Create a Post</h2>
      <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
    <button onClick={handleSubmit}>Submit</button>
  </div>);
};

export default PostForm;
