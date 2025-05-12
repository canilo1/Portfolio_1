"use client";

import { useState } from "react";
import "../globals.css";

export default function NavBar() {

  return (
    <section className="OverContainer">
      <button id="JohnGutierrez" className="Nav_Buttons_1">
        John Gutierrez
      </button>

      <button id="Projects" className="Nav_Buttons_1">
        Projects
      </button>

      <div id="SearchBar">
        <img src="search-icon.png" alt="Search Icon" />
        <input
          type="text"
          placeholder="Search..."
          className="SearchProjects"
          aria-label="Search Projects"
        />
      </div>

      <button id="ContactPage" className="Nav_Buttons_1">
        Contact Page
      </button>
        <button id = "CurrencyTop" className="Nav_Buttons_1">Projects Completed:5</button>
    </section>
   
  );
}
