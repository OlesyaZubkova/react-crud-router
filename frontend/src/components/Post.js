function Post(props) {
  const { post } = props;

  return (
    <div className="post">
      <div className="post-header">
        <img className="user-img" src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="img" />
        <div className="post-info">
          <p className="user-name">Ivan Ivanov</p>
          <p className="post-date">{post.created}</p>
        </div>
      </div>

      <div className="post-content">{post.content}</div>

      <div className="post-footer">
        <button className="btn like-btn">Нравится</button>
        <button className="btn comment-btn">Комментировать</button>
      </div>

      {props.children}
    </div>
  );
}

export default Post;
