import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import New from "./pages/New/New";
import PostView from "./pages/PostView/PostView";
import PostEdit from "./pages/PostEdit/PostEdit";

export default function App() {

  const baseName = import.meta.env.VITE_APP_URL_BASENAME;
  const url = import.meta.env.VITE_APP_URL;

  return (
    <>
      <h1>9. Домашнее задание к занятию «React Router»</h1>
      <h2>9.2 CRUD</h2>
      <div className={'container'}>
        <Router basename={baseName}>
          <Routes>
            <Route path="/" element={<Home url={url} />} />
            <Route path="/posts/new" element={<New url={url} />} />
            <Route path="/posts/:id" element={<PostView url={url} />} />
            <Route path='/posts/:id/edit' element={<PostEdit url={url} />} />
          </Routes>
        </Router>
      </div>
    </>

  );
};

