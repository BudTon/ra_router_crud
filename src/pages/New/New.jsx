import { useNavigate } from "react-router-dom";
import image1 from '../../img/image1.png'
import image2 from '../../img/image2.png'
import image3 from '../../img/image3.png'
import image4 from '../../img/image4.png'
import './new.css'

export default function New(props) {
  let navigate = useNavigate();
  
  function handleSubmit(e) {
    e.preventDefault();

    let data = {
      id: 0,
      content: e.target.querySelector('input').value,
    };

    fetch(props.url+"/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charser=utf-8",
      },
      body: JSON.stringify(data),
    });

    navigate('/')
  };

  return (
    <>
      <div className="container-new-post">
        <div className="header-new-post">
          <div className="option">
            <img src={image1} alt="Icon" className="option-icon" />
            <span className="option-text">Публикация</span>
          </div>
          <div className="option">
            <img src={image2} alt="Фото/Видео" className="option-icon" />
            <span className="option-text">Фото/Видео</span>
          </div>
          <div className="option">
            <img src={image3} alt="Прямой эфир" className="option-icon" />
            <span className="option-text">Прямой эфир</span>
          </div>
          <div className="option">
            <img src={image4} alt="Ещё" className="option-icon" />
            <span className="option-text">Ещё</span>
          </div>
          <div className="close">
            <button className="post-create-close" onClick={() => navigate('/')}>X</button>
          </div>
        </div>

        <form name="postForm" onSubmit={handleSubmit}>
          <div className="content">
            <div className="input">
              <input type="text" placeholder="Пост, относящийся к курсу React" className="input-field" />
            </div>
          </div>
          <div className="footer">
            <button type="submit" className="publish-button">
              Опубликовать
            </button>
          </div>
        </form>

      </div>
    </>
  );
}