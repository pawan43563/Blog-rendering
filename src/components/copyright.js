

export const copyright=()=>{
    let copy=document.createElement("div");
    copy.id="copyright"
    let p=document.createElement("p")
    p.innerText="©2021 Pawan Sharma";
    copy.appendChild(p)
    return copy
}