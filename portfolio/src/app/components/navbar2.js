"use client";
import { useState } from "react";
import "../navbar2.css";
import ProfilePage from "../pages/profiles";
import { createPortal } from "react-dom";

export default function NavBar2() {
  const [isOpen, setIsOpen] = useState(false);

  const setIsOpenBugger = (value) => {
    console.log("This is the value", value);
    setIsOpen(value);
  };

  return (
    <section id="Navbar2Section">
      <button className = "NavBar2Buttons"  onClick={() => setIsOpenBugger(!isOpen)}>Profile</button>

      {isOpen &&
        createPortal(
          <div
            style={{

            }}
          >
            <ProfilePage Visibility={isOpen} />
          </div>,
          document.body
        )}

      <button className = "NavBar2Buttons">Messages</button>
      <button className = "NavBar2Buttons">Friends</button>
      <button className = "NavBar2Buttons">Inventory</button>
      <button className = "NavBar2Buttons">Trade</button>
      <button className = "NavBar2Buttons">Communities</button>
      <button className = "NavBar2Buttons">Blog</button>
      <button className = "NavBar2Buttons" >Github</button>
    </section>
  );
}
