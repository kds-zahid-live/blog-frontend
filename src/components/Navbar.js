import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/new" style={styles.navLink}>New Post</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/blog" style={styles.navLink}>Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

// Simple styling for the navbar
const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginRight: '20px',
  },
  navLink: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '16px',
    padding: '8px 16px',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
  },
};

export default Navbar;
