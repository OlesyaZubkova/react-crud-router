import { useState, useEffect } from "react";
import PostsContext from "./PostsContext";

function PostsProvider(props) {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch(process.env.REACT_APP_POSTS_URL)
      .then((resp) => resp.json())
      .then((data) => setPosts(data));
  }, []);

  const handleChange = (data) => setPosts(data);

  return (
    <PostsContext.Provider
      value={{
        posts: posts,
        handleChange: handleChange,
      }}
    >
      {props.children}
    </PostsContext.Provider>
  );
}

export default PostsProvider;
