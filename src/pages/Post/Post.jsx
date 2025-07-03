import { Link } from "react-router-dom";
import './post.css'
import imgAuthor from '../../img/image.png'
import DiffTime from "../../components/DiffTime";

export default function Post(props) {

  if (props.data != undefined) {
    return (
      <>
        <div className="post" >
          <div className="post-author">
            <img className="post-avatar" src={imgAuthor} />
            <p className="post-author-name">Ilinaz Gilyazov</p>
            {DiffTime(props.data.created)}
          </div>
          <div className="post-main">
            <Link to={`/posts/${props.id}`} className='post-link'>
              <div className="post-content">
                <p className="post-text">{props.data.content} </p>
              </div>
            </Link>
            <div className="post-footer">
              <div className="post-react-buttons">
                <button className="post-like-button">Нравится</button>
                <button className="post-comment-button">Комментировать</button>
              </div>
              <div className="post-react-buttons">
                <img className="post-avatar" src={imgAuthor} />
                <textarea className="comment-textarea" placeholder="Напишите комментарий..."></textarea>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}