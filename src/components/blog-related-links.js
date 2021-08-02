import { blogobj } from "./blog-section.js";
import { Blog } from "./blog-section.js";

export const BlogRelatedlinks=(blog)=>{
    let blogrelatedlinks=document.createElement("div");
    blogrelatedlinks.className="blog-related-links active";
    blogrelatedlinks.id="blog-links"
    let heading=document.createElement("h2");
    heading.innerText="Related Links";
    blogrelatedlinks.appendChild(heading)
    blog.links.forEach(link => {
        let a=document.createElement("a");
        a.href="#";
        a.id=link.id;
        a.innerText=link.title;
        a.className="related-links";
        a.addEventListener('click',(event)=>RelatedLinks(event));
        blogrelatedlinks.appendChild(a);
        
    });
    return blogrelatedlinks
}

const RelatedLinks=(event)=>{
    let root=document.getElementById("root");
    let clas=document.getElementsByClassName("blog-container")[0];
    let blogid=event.target.id;
    let result=blogobj(blogid)
    root.replaceChild(Blog(result),clas)
    // clas.innerHTML=Blog(data,result).innerHTML
}
