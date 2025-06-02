"use client";
import { useState } from "react";
import NavBar from './components/navbar';
import NavBar2 from './components/navbar2';
import ProfilePage from './pages/profiles';

import './globals.css';

export default function Home() {
  const [currentView, setCurrentView] = useState("profile");

  const renderView = () => {
    switch (currentView) {
      case "profile":
        return <ProfilePage />;

      case "messages":
        return <div>Messages page coming soon!</div>;
      case "friends":
        return <div>Friends page</div>;
   
      case "trade":
        return <div>Trade page</div>;
      case "communities":
        return <div>Communities page</div>;
      case "blog":
        return <div>Blog page</div>;
      case "github":
        return <div>GitHub page</div>;
      default:
        return <div>Select a page from the sidebar.</div>;
    }
  };

  return (
    <>
      <NavBar />
      <div className="main-layout-wrapper">
        <NavBar2 setCurrentView={setCurrentView} />
        <div className="main-content-area">
          {renderView()}
        </div>
      </div>
    </>
  );
}
