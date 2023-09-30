import { useDispatch } from "react-redux";
import postSlice from "./postSlice";
import { useState } from "react";

export default function PostForm() {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  return <div></div>;
}
