import { useState } from "react";
import { Navigate } from "react-router-dom";

function CreatePostPage() {
  const [value, setValue] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleChange = (e) => setValue(e.target.value);

  const handleCancel = (e) => {
    e.preventDefault();
    setRedirect(!redirect);
  };

  const handleAdd = (e) => {
    e.preventDefault();

    fetch(process.env.REACT_APP_POSTS_URL, {
      method: "POST",
      body: JSON.stringify({ id: 0, content: value }),
    }).then(setRedirect(!redirect));
  };

  return (
    <div className="page create-post-page">
      <div className="create-post-container">
        <div className="create-post-header">
          <h5>Создать публикацию</h5>
          <button className="btn cancel-btn" onClick={handleCancel}>
            X
          </button>
        </div>
        <form className="create-post-form">
          <textarea
            className="create-post-input"
            rows="3"
            placeholder="type here"
            value={value}
            onChange={handleChange}
            required
          />
          <div className="button-wrapper">
            <button className="btn add-btn" onClick={handleAdd}>
              Опубликовать
            </button>
          </div>
        </form>
      </div>
      {redirect && <Navigate to="/" />}
    </div>
  );
}

export default CreatePostPage;
