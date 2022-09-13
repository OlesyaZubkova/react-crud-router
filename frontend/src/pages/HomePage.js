import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PostsList from "../components/PostsList";
import PostsContext from "../contexts/PostsContext";

function HomePage() {
  const { posts, handleChange } = useContext(PostsContext);

  useEffect(() => {
    fetch(process.env.REACT_APP_POSTS_URL)
      .then((resp) => resp.json())
      .then((data) => handleChange(data));
      // eslint-disable-next-line
  }, []);

  return (
    <>
      {posts && (
        <div className="page home-page">
          <div className="add-block">
            <Link to="posts/new">
              <button className="btn add-btn">Создать пост</button>
            </Link>
          </div>
          <PostsList />
        </div>
      )}
    </>
  );
}

export default HomePage;
