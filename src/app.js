import { Navbar } from "./components/Navbar.js";
import { Blog } from "./components/blog-section.js";
import { Footer } from "./components/footer.js";
import { blogobj } from "./components/blog-section.js";
import { blogs } from "./data.js";
import { sidenav } from "./components/sidenav.js";

const rootDiv=document.getElementById("root");




const randombloggenerator=(data)=>{
    let blog=data[Math.floor(Math.random()*data.length)]
    return blog.id

}

blogs().then((data)=>{
    passingFunction(data)
})


function passingFunction(data){
    rootDiv.appendChild(Navbar());
    rootDiv.appendChild((sidenav()))
    let blogid=randombloggenerator(data)
    rootDiv.appendChild(Blog(data,blogobj({data,blogid})));
}








// fetch(baseUrl2)
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     passingDataFooter(data);
// })
// .catch((err)=>{
//     console.log("Error Received while fetching data",err);
// })

// const passingDataFooter=(data)=>{
//     rootDiv.appendChild(Footer(data.FooterData));
// }
