import { useState } from 'react';
import '../globals.css'; 
 
export default function NavBar(){
    const [Title,setTitle] = useState("Blog")
    
return(<>

        <section className = "OverContainer">

            <button id = "JohnGutierrez" className = "Nav_Buttons_1">
                John Gutierrez
            </button>
            
            <button id = "Projects" className = "Nav_Buttons_1">
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

            <section className ="PostingContainer">
                <button id = "Blogs" className = "Nav_Buttons_1">
                    Blogs
                </button>
                <button id = "Github" className = "Nav_Buttons_1">Github</button>
                </section>
            <button id = "ContactPage" className = "Nav_Buttons_1">
                Contact Page
            </button>
        </section>
</>);
}