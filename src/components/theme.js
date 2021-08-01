

export const Theme=()=>{
    let toggle=document.createElement("p");
    toggle.id="theme";
    toggle.className="fa fa-sun";
    toggle.addEventListener("click",Toggle)
    return toggle
}

const Toggle=(event)=>{
    const body=document.getElementsByTagName("body")[0];
    const relatedlinks=document.querySelector(".blog-related-links")
    const afterlinks=document.querySelector(".after-div-links")
    if(event.target.classList.contains("fa-sun")){
        event.target.classList.remove("fa-sun");
        event.target.classList.add("fa-moon");
        body.classList.add("dark")
        relatedlinks.classList.remove("related-theme")
        afterlinks.classList.remove("related-theme")
       
    }else{
        event.target.classList.remove("fa-moon");
        event.target.classList.add("fa-sun")
        body.classList.remove("dark")
        relatedlinks.classList.add("related-theme")
        afterlinks.classList.add("related-theme")
    }
}