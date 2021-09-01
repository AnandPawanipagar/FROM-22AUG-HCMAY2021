import fetch from 'node-fetch';
fetch('https://jsonplaceholder.typicode.com/posts').then((response)=>{
    return response.json()
}).then((data)=>{
     console.log(data)
})

