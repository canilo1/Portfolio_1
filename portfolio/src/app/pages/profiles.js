const ProfilePage = () => {
  return (
    <>
      <div className="profile-container">
        <img
          src="https://i.pinimg.com/originals/4c/8f/0b/4c8f0b1a2d3e5a7d6e9f3a2b5c4e1f3b.jpg"
          alt="Profile Background"
          className="profile-background"
        />
        <h1>John Gutierrez</h1>
        <p>Followers: 123</p>
        <p>Following: 200</p> {/* Add actual data if available */}
      </div>

      <section className="about-page">
        <h2>About</h2>
        <p>Hi, I’m John. hfwbfabfbowa</p>
      </section>

      <section className="communities">
        <h2>Communities / Organizations</h2>
        <ul>
          <li>
            <h3>Community 1</h3>
            <p>Details about Community 1</p>
          </li>
          <li>
            <h3>Community 2</h3>
            <p>Details about Community 2</p>
          </li>
          <li>
            <h3>Community 3</h3>
            <p>Details about Community 3</p>
          </li>
        </ul>
      </section>

      <section className="favorite-projects">
        <h2>Favorite Projects</h2>
        <ul>
          <li>
            <h3>Favorite Project 1</h3>
            <p>Details about Project 1</p>
          </li>
          <li>
            <h3>Favorite Project 2</h3>
            <p>Details about Project 2</p>
          </li>
          <li>
            <h3>Favorite Project 3</h3>
            <p>Details about Project 3</p>
          </li>
        </ul>
      </section>

      <section className="certifications">
        <h2>Certifications</h2>
        <ul>
          <li>
            <h3>Certification 1</h3>
            <p>Details about Certification 1</p>
            <a href="#">Organization Link</a>
          </li>
          <li>
            <h3>Certification 2</h3>
            <p>Details about Certification 2</p>
            <a href="#">Organization Link</a>
          </li>
          <li>
            <h3>Certification 3</h3>
            <p>Details about Certification 3</p>
            <a href="#">Organization Link</a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default ProfilePage;
