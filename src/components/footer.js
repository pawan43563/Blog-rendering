

export const Footer=()=>{
    let markup=document.createElement("div");
    markup.classList.add("footer");
    const links=document.createElement("div");
    links.classList.add("footer-links")
    const link1=document.createElement("i")
    link1.className="fa fa-github fa-2x"
    const link2=document.createElement("i")
    link2.className="fa fa-linkedin fa-2x"
    const link3=document.createElement("i")
    link3.className="fa fa-facebook fa-2x"
    links.appendChild(link1)
    links.appendChild(link2)
    links.appendChild(link3)
    markup.appendChild(links)
    return markup


}