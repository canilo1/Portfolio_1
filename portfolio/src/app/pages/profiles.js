import React from 'react';
import "../pages/pages.css"
import John1 from '../images/John1.jpg' // Adjusted path based on typical React structure

const Portfolio1 = () => {
  const VISIBILITY = true;

  if (!VISIBILITY) return null;

  return (
    <section className="profile-page">
      <div className="profile-container">
        <img
          src={John1}
          alt="Profile Background"
          className="profile-background"
        />
        <div className="profile-info">
          <h1 id="HeaderProfile">John Gutierrez</h1>
          <div id="Followers">
            <p>Followers: 123</p>
            <p>Following: 200</p>
          </div>
        </div>
      </div>
      <nav className="navbar">
        <h1>John Gutierrez</h1>
        <ul className="nav-links">
          <li>Projects</li>
          <li>Contact Page</li>
          <li>Search...</li>
          <li>Settings</li>
        </ul>
      </nav>
      <aside className="sidebar">
        <ul className="side-links">
          <li>Home</li>
          <li>Profile</li>
          <li>Messages</li>
          <li>Network</li>
          <li>Branding</li>
          <li>Portfolio Archive</li>
          <li>Services</li>
          <li>Blog</li>
          <li>Github</li>
          <li>Shop</li>
          <li>Support</li>
          <li>Hire Me</li>
        </ul>
      </aside>
    </section>
  );
};

export default Portfolio1;