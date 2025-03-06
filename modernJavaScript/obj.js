const person = {
    name : "hena",
    age : 10,
    1: 100,
    country : "BD",
    details : {
        job : "Employed",
        'job-location' : "baridhara",
        father :{
            name : "selim khan",
            position : "coe",
            age: 51
        }
    }
}

console.log(person['name'])
console.log(person['details']['father'])

// console.log(person.country)
// console.log(person.details.job)
// console.log(person.details.father.name)
// console.log(person.details.mother.name)

// optional chaining in js-> when there is such key is pass for that that object. it will throw an error. to resolve this problem we can use optional chaining., this will prevent out code from crashing. and if the key is there it will return undefined.
console.log(person.details.mother?.name)

