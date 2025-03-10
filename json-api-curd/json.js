const person = {
    name : 'Hena',
    age : 20,
    isMarried : false,
}

console.log(person);

// to convert a Object into json string 
const newPerson = JSON.stringify(person)
console.log(newPerson)

// to revert the Json string into previous object 
const newPerson2 = JSON.parse(newPerson)
console.log(newPerson2)