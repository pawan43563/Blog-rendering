
export const sidenav=()=>{
    let toggle=document.createElement("li")
    toggle.className="fa fa-link fa-2x toggle";
    let a=document.createElement("a")
    a.href="#blog-links"
    toggle.addEventListener('click',hide);
    toggle.appendChild(a)
    return toggle

}

const hide=(event)=>{
    let related=document.getElementById("blog-links");
    if(related.style.display==="flex"){
        related.style.display="none"
    }else{
        related.style.display="flex";
        
    }
}