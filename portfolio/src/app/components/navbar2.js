"use client";
import "../navbar2.css";

export default function NavBar2({ setCurrentView }) {
  return (
    <section id="Navbar2Section">
      <button className="NavBar2Buttons" onClick={() => setCurrentView("profile")}>Profile</button>
      <button className="NavBar2Buttons" onClick={() => setCurrentView("messages")}>Messages</button>
      <button className="NavBar2Buttons" onClick={() => setCurrentView("friends")}>testimonials</button>
     <button className="NavBar2Buttons" onClick={() => setCurrentView("Projectss")}>Projects</button>
      <button className="NavBar2Buttons" onClick={() => setCurrentView("blog")}>Blog</button>
      <button className="NavBar2Buttons" onClick={() => setCurrentView("github")}>Research</button>
      <button className="NavBar2Buttons" onClick={() => setCurrentView("Resume")}>Resume</button>
      <button className="NavBar2Buttons" onClick={() => setCurrentView("Experiments")}>Experiments</button>
      <button className="NavBar2Buttons" onClick={() => setCurrentView("Contact")}>Contact</button>
    </section>
  );
}
