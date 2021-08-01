

const baseUrl="https://niravkpatel28.github.io/json-data-server/blogs/blogs.json";


export const blogs=()=>{ return fetch(baseUrl)
.then((response)=>{
    return response.json()
})
.then((data)=>{
    return data
})
.catch((err)=>{
    console.log("Error Received while fetching data",err);
})
}