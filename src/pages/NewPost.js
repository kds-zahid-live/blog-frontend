import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './NewPost.css'; // Optional: Create a CSS file for styling
import { FaImage } from 'react-icons/fa'; // Import an image icon (react-icons)

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [altText, setAltText] = useState('');
  const [imageHeight, setImageHeight] = useState('');
  const [imageWidth, setImageWidth] = useState('');
  const [showImageFields, setShowImageFields] = useState(false); // Track visibility
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newPost = {
        title,
        content,
        imageUrl, // Add the image URL to the new post object
        altText, // Add the alt text
        imageHeight, // Add the image height
        imageWidth, // Add the image width
      };
      await axios.post('http://localhost:5000/api/posts', newPost);
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  // Insert the image URL along with alt text, height, and width into the content editor
  const handleInsertImage = () => {
    const imageHTML = `
      <img src="${imageUrl}" alt="${altText}" height="${imageHeight}" width="${imageWidth}" style="max-width: 100%; margin-top: 10px;"/>
    `;
    const currentContent = content;
    setContent(currentContent + imageHTML); // Append the image HTML to the content
    setImageUrl(''); // Reset the image URL input after insertion
    setAltText(''); // Reset alt text input after insertion
    setImageHeight(''); // Reset image height after insertion
    setImageWidth(''); // Reset image width after insertion
  };

  return (
    <form onSubmit={handleSubmit} className="new-post-form">
      <h1>Create New Post</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="input-field"
      />
      <ReactQuill theme="snow" value={content} onChange={setContent} className="quill-editor" />

      <button 
        type="button" 
        className="insert-image-icon-btn" 
        onClick={() => setShowImageFields(!showImageFields)}
      >
        <FaImage size={24} color="#007BFF" />
      </button>

      {showImageFields && (
        <div className="image-fields">
          <input
            type="text"
            placeholder="Enter image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Enter alt text"
            value={altText}
            onChange={(e) => setAltText(e.target.value)}
            className="input-field"
          />
          <input
            type="number"
            placeholder="Enter image height"
            value={imageHeight}
            onChange={(e) => setImageHeight(e.target.value)}
            className="input-field"
          />
          <input
            type="number"
            placeholder="Enter image width"
            value={imageWidth}
            onChange={(e) => setImageWidth(e.target.value)}
            className="input-field"
          />
          <button type="button" onClick={handleInsertImage} className="insert-image-btn">
            Insert Image
          </button>
        </div>
      )}

      <button type="submit" className="submit-btn">Create Post</button>
    </form>
  );
};

export default NewPost;
