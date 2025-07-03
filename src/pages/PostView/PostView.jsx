/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../Post/post.css'
import './post-view.css'
import imgAuthor from '../../img/image.png'

export default function PostView(props) {

  let [text, setText] = useState(undefined);
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(props.url + '/posts')
      .then((data) => data.json())
      .then((data) => {
        let content = data.find((item) => {
          return item.id === +id;
        });
        setText(content.content);
      });

  }, [id]);

  let deletePost = () => {
    fetch(props.url + `/posts/${id}`, {
      method: "DELETE",
    });
    navigate("/");
  };

  let editPost = () => {
    navigate(`/posts/${id}/edit`);
  };

  return (
    <>
      <div className="post" >
        <div className="post-author">
          <img className="post-avatar" src={imgAuthor} />
          <p className="post-author-name">Ilinaz Gilyazov</p>
          <button className="close-button" onClick={() => navigate("/")}> X </button>
        </div>
        <div className="post-main">
            <div className="post-content">
            <p className="post-text">{text}</p>
            </div>
          <div className="post-footer">
            <div className="post-react-buttons">
              <button className="post-like-button">Нравится</button>
              <button className="post-comment-button">Комментировать</button>
            </div>
          </div>
        </div>
        <div className="post-footer">
          <div className="post-actions">
            <button className="action-button" onClick={editPost}>Изменить</button>
            <button className="action-button delete-button" onClick={deletePost}>Удалить</button>
          </div>
        </div>
      </div>
    </>
  );
}