// pages/home.js (assuming this is your main page component)
"use client"; // If you're using Next.js App Router and this is a client component

import NavBar from './components/navbar'; // Adjust the path as necessary
import NavBar2 from './components/navbar2'; // Adjust the path as necessary
import React from 'react';
import Profile from "./pages/profiles"

// Import your global CSS if it's not already handled by Next.js or your setup
import './globals.css'; // This means "look in the current directory"

export default function Home() {
  return (
    <>
      <NavBar />
     
      <div className="main-layout-wrapper">
            <NavBar2 /> 
        <div className="main-content-area">
        
             <Profile />
    
          </div>

        </div>

    </>
  );
}