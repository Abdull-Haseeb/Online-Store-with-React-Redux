// PostForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../postSlice";

const PostList = () => {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (content.trim() === "") return;
    dispatch(addPost({ id: Date.now(), content }));
    setContent("");
  };

  return (
    <div>
      <h1>Post Form </h1>
      <ul>
        <li key={post.id}>
          {post.content}{" "}
          <button onClick={() => handleDelete(post.id)}>Delete</button>
        </li>
      </ul>
    </div>
  );
};

export default PostList;
