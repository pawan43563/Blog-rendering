import { Theme } from "./theme.js";

export const Navbar=()=>{
    let navDiv=document.createElement("h1");
    navDiv.id="navbar";
    navDiv.innerText="Blogs"
    navDiv.appendChild(Theme())
    return navDiv
}