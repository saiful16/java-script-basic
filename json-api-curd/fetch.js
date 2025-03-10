// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => console.log(data))


function loadDataHandler(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        for(let item of data){
            // console.log(item)
            const li = document.createElement("li")
            li.innerText = `${item.id} ${item.title} ${item.body} $`
            const liConntaiern = document.getElementById('order-list')
            liConntaiern.appendChild(li)
    
        }
    })


}

const loadUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        for(user of data){
            console.log(user.id, user.name, user.username, user.email, user.address.city, user.company.name)
        }
    })
}