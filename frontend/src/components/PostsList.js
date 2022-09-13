import { Link } from "react-router-dom";
import { useContext } from "react";
import Post from "./Post";
import PostsContext from "../contexts/PostsContext";

function PostsList() {
  const { posts } = useContext(PostsContext);

  return (
    <div className="posts-list">
      {posts.map((o) => (
        <Link to={`/posts/${o.id}`} key={o.id}>
          <Post post={o} />
        </Link>
      ))}
    </div>
  );
}

export default PostsList;
