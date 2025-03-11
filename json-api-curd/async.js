// fetch ("https://jsonplaceholder.typicode.com/users")
// .then(response => response.jsn())
// .then(data => console.log(data))
// .catch(error => console.log("Error khaice")) 


// const userList = async () => {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const userList = await response.json()
//         console.log(userList)
//     }
//     catch {
//         console.log('check the try block again')
//     }
// }

// userList()

// const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
// // console.log(stuInfo.name); 


// async function 

const loadData = async ()=>{
try{
    console.log("first")
    console.log("second")
    const result = 10 + 10;
    console.log(result)
    // setTimeout(()=>{
    //     console.log("time-out")
    // }, 2000)

    // fetch('https://jsonplaceholder.typicode.com/posts/1')
    // .then(res => res.json())
    // .then(data => console.log(data))

    const response =await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data = await response.json()
    console.log(data)

    console.log("third")
}
catch (error){
 console.log(error)
}
}

loadData()