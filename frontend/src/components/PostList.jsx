import { useSelector, useDispatch } from "react-redux";
import { deletePost, editPost } from "../postSlice";

const PostList = () => {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };
  const handleEdit = (id) => {
    dispatch(editPost(id));
  };

  return (
    <div>
      <h1>Post Form </h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.content}{" "}
            <button onClick={() => handleDelete(post.id)}>Delete</button>
            <button onClick={() => handleEdit(post.id)}>Edit Post</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
