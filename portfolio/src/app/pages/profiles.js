import React, { useState } from 'react';
import '../pages/pages.css';
import John1 from '../images/John1.jpg';

const Portfolio1 = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [showQuestion, setShowQuestion] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showInfo, setShowInfo] = useState("");

  const handleMouseEnter = () => setShowQuestion(true);
  const handleMouseLeave = () => setShowQuestion(false);
  const handleMouseMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
  const handleExit = () => setShowInfo("");

  const handleContextMenu = (e, infoKey) => {
    e.preventDefault();
    setPosition({ x: e.clientX, y: e.clientY });
    setShowInfo(showInfo === infoKey ? "" : infoKey);
  };

  const infoData = {
    CTD: {
      title: "Code The Dream",
      description:
        "Code The Dream is a nonprofit that empowers people from diverse backgrounds to learn software development. They offer free classes, mentorship, and real-world experience."
    },
    CTI: {
      title: "CTI",
      description:
        "The Computing Talent Initiative (CTI) helps underrepresented students in computer science by offering mentorship, networking, and career development resources."
    },
    CodePath: {
      title: "Code Path",
      description:
        "Code Path provides free, industry-aligned CS courses for college students, aiming to increase diversity in tech through accessible education and career opportunities."
    },
    MESA: {
      title: "MESA",
      description:
        "MESA supports underrepresented students in STEM with academic resources, mentorship, and community support for math, engineering, and science fields."
    }
  };

  return (
    <section className="profile-page">
      {/* Profile Header */}
      <div className="profile-header" id="ProfileHeader">
        <img src={John1} alt="Profile" className="profile-image" />
        <div id="ProfileInfo">
          <h1 id="HeaderProfile">John Gutierrez</h1>
          <h2>
            <a href="https://github.com/canilo1" target="_blank" rel="noopener noreferrer">
              @canilo
            </a>
          </h2>
          <div id="Followers">
            <p>Followers: 123</p>
            <p>Following: 200</p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="profile-buttons">
        <button onClick={() => setActiveSection('about')}>About</button>
        <button onClick={() => setActiveSection('creations')}>Creations</button>
      </div>

      {/* Main Content */}
      <section className="profile-content">
        {activeSection === 'about' && (
          <div className="about-section">
            <h3 id="Aboutheading">About</h3>
            <p>
              Hi, I'm John. I am a passionate undergraduate student aspiring to be a software
              engineer, looking to make my name in tech.
            </p>

            {/* Communities Section */}
            <section>
              <div className="communities-header">
                <h2>
                  Communities
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    width="20"
                    height="20"
                    className="question-icon-wrapper"
                    onMouseEnter={handleMouseEnter}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{ cursor: 'pointer' }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 
                        1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21
                        12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                    />
                  </svg>
                </h2>
                {showQuestion && (
                  <p
                    id="Info_question"
                    style={{
                      position: 'fixed',
                      top: position.y - 40,
                      left: position.x + 15,
                      padding: '8px',
                      borderRadius: '4px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      opacity: 0.95,
                      pointerEvents: 'none',
                      zIndex: 999
                    }}
                  >
                    Right click for info, left click to be directed
                  </p>
                )}
              </div>

              <ul id="CommunitiesList">
                <li className="community-item">
                  <a
                    href="https://codethedream.org"
                    className="community-link"
                    onContextMenu={(e) => handleContextMenu(e, 'CTD')}
                  >
                    Code The Dream
                  </a>
                </li>
                <li>
                  <a
                    href="https://computingtalentinitiative.org/accelerate/"
                    className="community-link"
                    onContextMenu={(e) => handleContextMenu(e, 'CTI')}
                  >
                    CTI
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.codepath.org/"
                    className="community-link"
                    onContextMenu={(e) => handleContextMenu(e, 'CodePath')}
                  >
                    Code Path
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.bing.com/search?q=math+engineering+and+science+academy"
                    className="community-link"
                    onContextMenu={(e) => handleContextMenu(e, 'MESA')}
                  >
                    MESA
                  </a>
                </li>
              </ul>
            </section>

            {/* Info Tooltip */}
            {showInfo && (
              <div
                className="card_infos"
                style={{
                  position: 'fixed',
                  top: position.y - 20,
                  left: position.x + 35,
                  padding: '8px',
                  borderRadius: '4px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  opacity: 0.95,
                  pointerEvents: 'auto',
                  zIndex: 999,
                }}
              >
                <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <button
                    className="ExitButton"
                    onClick={handleExit}
                    style={{
                      cursor: "pointer",
                      height: '30px',
                      width: '30px',
                    }}
                  >
                    X
                  </button>
                  <h2>{infoData[showInfo].title}</h2>
                  <p>{infoData[showInfo].description}</p>
                </section>
              </div>
            )}

            {/* Certifications */}
            <section>
              <h2>Certifications</h2>
              <ul className="certifications-list">
                <li>React Certification</li>
                <li>HTML, CSS Certification</li>
              </ul>
            </section>
          </div>
        )}

        {/* Creations Section */}
        {activeSection === 'creations' && (
          <section className="favorite-creations">
            <h2>Favorite Creations</h2>
            <div className="creation-card">
              <img src={John1} alt="Creation 1" />
              <h3>Creation Name</h3>
              <p>This is what this creation is about.</p>
            </div>
          </section>
        )}
      </section>
    </section>
  );
};

export default Portfolio1;
