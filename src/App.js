import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewPost from './pages/NewPost';
import Blog from './pages/Blog';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewPost />} />
        <Route path="/blog/:slug" element={<Blog />} /> {/* Use slug */}
      </Routes>
    </Router>
  );
};

export default App;
