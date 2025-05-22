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
      <button>
        <img />
        John Gutierrez
      </button>
      <button onClick={() => setIsOpenBugger(!isOpen)}>Profile</button>

      {isOpen &&
        createPortal(
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#36363dda",
              padding: "20px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
              zIndex: 9999,
            }}
          >
            <ProfilePage Visibility={isOpen} />
          </div>,
          document.body
        )}

      <button>Messages</button>
      <button>Friends</button>
      <button>Inventory</button>
      <button>Trade</button>
      <button>Communities</button>
      <button>Blog</button>
      <button>Github</button>
    </section>
  );
}
