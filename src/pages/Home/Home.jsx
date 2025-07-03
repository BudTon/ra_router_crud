import Post from "../Post/Post";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import './home.css'


export default function Home(props) {
  let [list, setList] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      await fetch(props.url + "/posts")
        .then((response) => response.json())
        .then((data) => {
          setList(data);
          setLoading(false);
        });
    };
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <>
      <div className="container-crud">
        <NavLink to="/posts/new" className={"create-post-button"}>
          Создать пост
        </NavLink>
      </div>
      {loading && <p>Loading</p>}
      <div className="posts">
        {list
          .map((item) => <Post key={item.id} id={item.id} data={item}></Post>)
          .reverse()}
      </div>
    </>
  );
}