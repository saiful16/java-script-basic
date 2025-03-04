const person = {
    name : "hena",
    age : 10,
    country : "BD"
}

// keys of object
// console.log(Object.keys(person))
// values of object
// console.log(Object.values(person))
// entries of an Object
// console.log(Object.entries(person))
Object.freeze(person)
person.staus ='not found '
// object seal 
Object.seal(person);
// Object.freeze(person)
// person.staus ='not found '
// console.log(person)

for(let key in person){
    // console.log(person[key])
    // console.log(`keys : ${key} 
        // values : ${person[key]}`)
}
// console.log(Object.entries(person))

for(let [arr, val] of Object.entries(person)){
    // console.log(arr,val)

    console.log(`key: ${arr} value: ${val}`)
}