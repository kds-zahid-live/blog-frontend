import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Blog.css';

const Blog = () => {
  const { slug } = useParams(); // Use the slug from the route
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`https://blog-server-i6fp.onrender.com/api/posts/slug/${slug}`)
      .then(res => setPost(res.data))
      .catch(err => console.error(err));
  }, [slug]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="blog-container">
      <h1 className="blog-title">{post.title}</h1>
      {post.imageUrl && (
        <div className="blog-image">
          <img 
            src={post.imageUrl} 
            alt={post.altText || "Post Image"} 
            height={post.imageHeight || "auto"} 
            width={post.imageWidth || "100%"} 
            className="blog-image-img"
          />
        </div>
      )}
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
};

export default Blog;
