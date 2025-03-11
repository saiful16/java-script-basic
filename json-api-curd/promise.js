// const loadData = () => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data=> console.log(data))
// }

// loadData()


// make promise

// const fetchData = () =>{
//     return new Promise((resolve, reject)=>{
//         const status = true;
//         if(status ){
//             resolve({name : "hero"})
//         }
//         else{
//             reject("server error")
//         }
//     })
// }

// fetchData().then(res => res).then(data => console.log(data))

// const fetchData = () =>{
//     return new Promise((resolve, reject)=>{
//         const status = true;
//         if(status ){
//             const mockData = {
//                 json: ()=>{
//                     return Promise.resolve({name : "Hero"})
//                 }
//             }
//             resolve(mockData)
//         }
//         else{
//             reject("server error")
//         }
//     })
// }

// fetchData().then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err))


//multiple api fetchihng 
// const urls = [
//     'https://jsonplaceholder.typicode.com/posts/1',
//     'https://jsonplaceholder.typicode.com/posts/1/comments',
//     'https://jsonplaceholder.typicode.com/comments?postId=1',
//     'https://jsonplaceholder.typicode.com/users'
// ]

// Promise.all(urls.map(url =>{
//     return fetch(url)
//     .then(respose => respose.json())
//     .then(data => data)
// }))

// .then(respose => respose)
// .then(data => console.log(data))
// .catch(err => console.log(err))