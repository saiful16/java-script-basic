// fetch ("https://jsonplaceholder.typicode.com/users")
// .then(response => response.jsn())
// .then(data => console.log(data))
// .catch(error => console.log("Error khaice")) 


const userList = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const userList = await response.json()
        console.log(userList)
    }
    catch {
        console.log('check the try block again')
    }
}

userList()