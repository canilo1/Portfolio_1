import '../globals.css'; 
 
export default function NavBar(){
return(<>

        <section className = "OverContainer">

            <button id = "JohnGutierrez" className = "Nav_Buttons_1">
                John Gutierrez
            </button>
            
            <button id = "Projects" className = "Nav_Buttons_1">
                Projects
            </button>
            <div>
            <input
        type="text"
        placeholder="Search..."
        className="search-input"
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