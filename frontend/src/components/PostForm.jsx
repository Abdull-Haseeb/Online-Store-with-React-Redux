
import React, { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../postSlice";

const PostForm = ({post}) => {
  const [content, setContent] = useState(post ? post.content : '');
  
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (content.trim() === "") return;
    if (post) {

      dispatch(editPost({ id: post.id,updatedContent: content }));
    } else {
      dispatch(addPost({id:Date.now(),content}))
    };
    setContent("");
    }
  useEffect(() => {
    if (post) {
      setContent(post.content)
    }
  },[post])
  return (
    <div>
    <h2>{post?"Edit Post":"Add Post"}</h2>
      <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
    <button onClick={handleSubmit}>{post?"Edit":"Submit"}</button>
  </div>);
};

export default PostForm;
