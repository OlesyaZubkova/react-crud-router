import { useState, useContext } from "react";
import PostsContext from "../contexts/PostsContext";
import Post from "../components/Post";
import { useParams, Link, Navigate } from "react-router-dom";

function ViewPostPage() {
  const params = useParams();
  const { posts } = useContext(PostsContext);
  const [redirect, setRedirect] = useState(false);

  const post = posts.find((o) => o.id === parseInt(params.id));

  const handleDelete = (e) => {
    e.preventDefault();

    fetch(`${process.env.REACT_APP_POSTS_URL}/${post.id}`, {
      method: "DELETE",
    }).then(setRedirect(!redirect));
  };

  return (
    <div className="page post-page">
      <Post post={post}>
        <div className="post-actions-container">
          <Link to={`/posts/edit/${post.id}`}>
            <button className="btn edit-btn">Изменить</button>
          </Link>
          <button className="btn delete-btn" onClick={handleDelete}>
            Удалить
          </button>
        </div>
      </Post>
      {redirect && <Navigate to="/" />}
    </div>
  );
}

export default ViewPostPage;
