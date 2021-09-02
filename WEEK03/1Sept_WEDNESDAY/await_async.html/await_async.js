//  async function myFetch(){
//     let response=await fetch('https://jsonplaceholder.typicode.com/posts');
// let data=await response.json();
// console.log(data);

// }
// myFetch();
fetch('https://jsonplaceholder.typicode.com/posts').then(response=>response.json()).then(data=>console.log(data));

// dont forgot to use .json()---paraenthis should be there with .json