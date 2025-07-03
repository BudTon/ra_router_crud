import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './post-edit.css'
import imgAuthor from '../../img/image.png'
import img1 from '../../img/image-edit-1.png'
import img2 from '../../img/image-edit-2.png'
import img3 from '../../img/image-edit-3.png'
import img4 from '../../img/image-edit-4.png'
import img5 from '../../img/image-edit-5.png'

export default function EditPost(props) {
  let [text, setText] = useState(undefined);
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      await fetch(props.url + "/posts")
        .then((response) => response.json())
        .then((data) => {
          let response = data.find((item) => {
            return item.id === +id;
          });
          setText(response.content);
        });
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function savePost(e) {
    e.preventDefault();

    let data = {
      id: +id,
      content: document.querySelector('.input-field').value,
    };

    await fetch(props.url + `/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json; charser=utf-8",
      },
      body: JSON.stringify(data),
    });
    setText(data.content);
    navigate(`/`);
  }
  return (
    <>
      <div className="container-edit">
        <div className="header-edit">
          <h2>Редактировать публикацию</h2>
          <button className="close-button" onClick={() => navigate("/")}> X </button>
        </div>
        <div className="content-edit">
          <div className="author">
            <img src={imgAuthor} alt="Avatar" class="author-avatar" />
            <div className="input">
              <input type="text" defaultValue={text} className="input-field" />
            </div>
          </div>
          <div className="options-edit">
            <div className="option-edit">
              <img src={img1} alt="Фото/Видео" class="option-icon" />
              <span className="option-text">Фото/Видео</span>
            </div>
            <div className="option-edit">
              <img src={img4} alt="Отметить друзей" class="option-icon" />
              <span className="option-text">Отметить друзей</span>
            </div>
            <div className="option-edit">
              <img src={img2} alt="Чувства/Действия" class="option-icon" />
              <span className="option-text">Чувства/Действия</span>
            </div>
            <div className="option-edit">
              <img src={img5} alt="Отметить посещение" class="option-icon" />
              <span className="option-text">Отметить посещение</span>
            </div>
            <div className="option-edit">
              <img src={img3} alt="GIF" class="option-icon" />
              <span className="option-text">GIF</span>
            </div>
          </div>
        </div>
        <div className="footer-edit" onClick={savePost}>
          <button className="save-button">Сохранить</button>
        </div>
      </div>
    </>
  );
}