import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/posts')
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <h1 className="title">Blog Posts</h1>
      <Link to="/new" className="new-post-link">Create New Post</Link>
      <div className="posts-grid">
        {posts.map((post) => (
          <Link to={`/blog/${post.slug}`} >
            <div key={post.id} className="post-card">
              <h2 className="post-title">{post.title}</h2>
              <div
                className="post-content"
                dangerouslySetInnerHTML={{ __html: post.content.substring(0, 100) + '...' }}
              />
              {/* <Link to={`/blog/${post.id}`} className="read-more-link">Read More</Link> */}
              <Link to={`/blog/${post.slug}`} className="read-more-link">Read More</Link>

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
