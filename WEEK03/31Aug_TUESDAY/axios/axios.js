// using axios
const axios = require("axios")
const formData=() => axios.get("https://jsonplaceholder.typicode.com/posts")
.then(res=>{
    console.log(res.data,"anand123");
})
.catch(err=>{
    console.log(err);
})
formData();
