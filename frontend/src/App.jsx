import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import { useState } from "react";

function App() {
  const [editPostId, setEditPostId] = useState(null);

  const onEditClick = (Id) => {
    setEditPostId(Id);
  };
  return (
    <>
      <h1>Social Media App</h1>
      <PostForm post={editPostId ? { id: editPostId } : null} />
      <PostList onEditClick={onEditClick} />
    </>
  );
}

export default App;
