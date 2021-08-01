

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
    let blogrelatedlinks=document.createElement("div");
    blogrelatedlinks.className="blog-related-links";
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
        a.addEventListener('click',(event)=>RelatedLinks(event,data));
        blogrelatedlinks.appendChild(a);
        
    });

    blogDiv.appendChild(blogContent)
    blogDiv.appendChild(blogrelatedlinks)
    return blogDiv
}





const RelatedLinks=(event,data)=>{
    let root=document.getElementById("root");
    let clas=document.getElementsByClassName("blog-container")[0];
    let blogid=event.target.id;
    let result=blogobj({data,blogid})
    root.replaceChild(Blog(data,result),clas)
    // clas.innerHTML=Blog(data,result).innerHTML
}


