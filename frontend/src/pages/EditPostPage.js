import { useState, useContext } from "react";
import PostsContext from "../contexts/PostsContext";
import { useParams, Navigate } from "react-router-dom";

function EditPostPage() {
  const params = useParams();
  const { posts } = useContext(PostsContext);
  const post = posts.find((o) => o.id === parseInt(params.id));

  const [value, setValue] = useState(post.content);
  const [redirect, setRedirect] = useState(false);

  const handleChange = (e) => setValue(e.target.value);

  const handleCancel = (e) => {
    e.preventDefault();
    setRedirect(!redirect);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    fetch(process.env.REACT_APP_POSTS_URL, {
      method: "POST",
      body: JSON.stringify({ ...post, content: value }),
    }).then(setRedirect(!redirect));
  };

  return (
    <div className="page edit-post-page">
      <div className="edit-post-container">
        <div className="edit-post-header">
          <h5>Редактировать публикацию</h5>
          <button className="btn cancel-btn" onClick={handleCancel}>
            X
          </button>
        </div>
        <form className="edit-post-form">
          <textarea
            className="edit-post-input"
            rows="3"
            value={value}
            onChange={handleChange}
            required
          />
          <div className="button-wrapper">
            <button className="btn add-btn" onClick={handleEdit}>
              Сохранить
            </button>
          </div>
        </form>
      </div>
      {redirect && <Navigate to="/" />}
    </div>
  );
}

export default EditPostPage;
