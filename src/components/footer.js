

export const Footer=(FooterData)=>{
    console.log(FooterData);
    let markup=document.createElement("div");
    markup.classList.add("footer");
    const links=document.createElement("div");
    links.classList.add("footer-links")
    markup.appendChild(links);
    FooterData.FootLinks.forEach((link)=>{
        let a=document.createElement("a");
        let Link=document.createElement("i");
        link.class.forEach((item)=>{
            Link.classList.add(item)
        })
        Link.href=link.href;


        a.appendChild(Link);
        links.appendChild(a);
    })
    const copyright=document.createElement("div");
    copyright.classList.add("copyright");
    const head=document.createElement("p");
    head.innerText=FooterData.Copyright;
    copyright.appendChild(head);


    markup.appendChild(links)
    markup.appendChild(copyright)
    return markup;


}