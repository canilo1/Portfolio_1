import React from 'react';
import '../pages/pages.css';
import John1 from '../images/John1.jpg';

const Portfolio1 = () => {
  return (
    <section className="profile-page">
      <div className="profile-following">
        <div className="profile-page" id="ProfileHeader">
          <img
            src={John1}
            alt="Profile"
            className="profile-image"
          />
          <div id="ProfileInfo">
            <h1 id="HeaderProfile">John Gutierrez</h1>
            {/* Fixed: 'link' is not a valid tag, replaced with 'a' for hyperlink */}
            <h2><a href="https://github.com/canilo1">@canilo</a></h2>
            <div id="Followers">
              <p>Followers: 123</p>
              <p>Following: 200</p>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-buttons">
        <section id="AboutButton">
          <button>About</button>
        </section>
        <section id="CreationsButton">
          <button>Creations</button>
        </section>
      </div>

      <div className="AboutVisibility">
        <h3>About</h3>
        <p>Hi, I'm John. Blah blah.</p>

        <section>
          <h2>Communities</h2>
          <ul>
            <li>Community 1</li>
            <li>Community 2</li>
          </ul>
        </section>

        <section>
          <h2>Certifications</h2>
          <ul>
            <li>React Certification</li>
            <li>HTML, CSS Certification</li>
          </ul>
        </section>
      </div>

      <section className="favorite-creations">
        <h2>Favorite Creations</h2>
        <div className="creation-card">
          {/* Fixed: Added a placeholder image src */}
          <img src={John1} alt="Creation 1" />
          <h3>Creation Name</h3>
          <p>This is what this creation is about.</p>
        </div>
      </section>
    </section>
  );
};

export default Portfolio1;