import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter, Routes, Route} from "react-router-dom";
import './index.css';
import Layout from './layout';
import Home from "./pages/home/Home"
import Anime from "./pages/anime/Anime"
import Manga from './pages/manga/Manga';
import Lightnovels from './pages/lightnovels/lightnovels';
import Aboutme from './pages/aboutme/aboutme';
import Selected from './pages/selected/Selected';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='anime' element={<Anime/>}/>
          <Route path='manga' element={<Manga/>}/>
          <Route path='aboutme' element={<Aboutme/>}/>
          <Route path='lightnovels' element={<Lightnovels/>}/>
          <Route path='selected' element={<Selected/>}/>
        </Route>
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
