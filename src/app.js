import { Navbar } from "./components/Navbar.js";
import { Blog } from "./components/blog-section.js";
import { Footer } from "./components/footer.js";
import { blogobj } from "./components/blog-section.js";
import { blogs } from "./data.js";
import { sidenav } from "./components/sidenav.js";
import { copyright } from "./components/copyright.js";

const rootDiv=document.getElementById("root");

export let blogsArray=[]


const randombloggenerator=(data)=>{
    let blog=data[Math.floor(Math.random()*data.length)]
    return blog.id

}

blogs().then((data)=>{
    blogsArray.push(data)
    passingFunction(data)
})


function passingFunction(data){
    rootDiv.appendChild(Navbar());
    rootDiv.appendChild((sidenav()))
    let blogid=randombloggenerator(blogsArray[0])
    rootDiv.appendChild(Blog(blogobj(blogid)));
    rootDiv.appendChild(Footer());
    rootDiv.appendChild(copyright())
}


window.onresize = function(event) {
    let related=document.getElementById("blog-links");
    let after=document.getElementsByClassName("after-div-links")[0]
    if(window.innerWidth>800){
        related.style.display="flex"
        after.style.display="none";
    }
    if(window.innerWidth<800){
        related.style.display="none"
        after.style.display="flex";
    }
};




