import { BlogRelatedlinks } from "./blog-related-links.js"

export const blogobj=({data:props,blogid:blogid})=>{

    return props.find(element=> element.id==blogid )
}


export const Blog=(data,blog)=>{
    let blogDiv=document.createElement("div")
    blogDiv.className="blog-container";
    blogDiv.id=blog.id;
    let blogContent=document.createElement("div")
    blogContent.className="blog-content";
    let author=document.createElement("p");
    author.className="fa fa-user";
    let i=document.createElement("i")
    i.innerText=blog.author;
    author.appendChild(i)
  
    let imageUrl=document.createElement("img");
    imageUrl.src=blog.imageUrl;
    imageUrl.className="blog-image";
    let blogPara=document.createElement("p");
    blogPara.innerText=blog.content;
    let blogTitle=document.createElement("h2");
    blogTitle.className="blog-title";
    blogTitle.innerText=blog.title;
    let blogheading=document.createElement("div")
    blogheading.className="blog-heading";
    blogheading.appendChild(blogTitle)
    blogheading.appendChild(author)


    blogContent.appendChild(blogheading)
    blogContent.appendChild(imageUrl);
    blogContent.appendChild(blogPara)
    


    blogDiv.appendChild(blogContent)
    blogDiv.appendChild(BlogRelatedlinks(data,blog))
    let afterdiv=BlogRelatedlinks(data,blog);
    afterdiv.className="after-div-links";
    blogDiv.appendChild(afterdiv)
    return blogDiv
}







