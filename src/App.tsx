import './App.css';

import { Route, Routes, useLocation } from 'react-router-dom';

import DefaultHeader from './components/Header';
import BlogDetailPage from './page/blogDetailPage';
import BlogPage from './page/blogPage';
import MainPage from './page/mainPage';
import WorksDetailPage from './page/worksDetailPage';
import WorksPage from './page/worksPage';

const App = () => {
  const location = useLocation();
  const isMainPage = location.pathname === '/';

  return (
    <>
      {/* 메인 페이지는 본문 하단 링크로 이동하므로 헤더를 숨김 */}
      {!isMainPage && <DefaultHeader />}
      <div className={`background ${isMainPage ? 'backgroundFull' : ''}`}></div>
      <div>
        <Routes>
          <Route element={<MainPage />} path="/" />
          <Route element={<WorksPage />} path="/works" />
          <Route element={<BlogPage />} path="/blog" />
          <Route path="/works/:id" element={<WorksDetailPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
