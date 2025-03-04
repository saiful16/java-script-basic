// // const var let


// // const countryName = "Bangladesh";
// // console.log(countryName)
// // let age = 10;
// // console.log(age)
// //  age = 11;
// // console.log(age)





// // function in es6 
// // function with default parameter 

// function sum(num1 = 0, num2 = 0) {
//     const result = num1 + num2
//     console.log(result, num1, num2)
//     return result;

// }

// // sum(10,10)





// // template string 
// const language = 'bangla'
// const anthem = `amar sonar ${language} 
// ami tomay valobashi 
// chiro din tumar akash 
// tumar bathash 
// amar parne bajay bashi `;

// // console.log(anthem)





// // arrow function 
// function sum(num1 = 0, num2 = 0) {
//     const result = num1 + num2
//     console.log(anthem) // arguments will work in normal function
//     console.log(result, num1, num2)
//     return result;

// }

// const sum2 = (number1 = 0, number2 = 0) => number1 + number2;
// // console.log(sum2(10,30))

// const doubleNumber = (num) => num * 2;
// // console.log(doubleNumber(3))

// const division = (num1, num2) => {
//     // console.log(arguments)// in arrow function argumnets will not work
//     return num1 / num2
// }
// //console.log(division(23, 2))

// const string = (str) => str;
// //console.log(string('My Name is saiful'))
// const string2 = () => 'str';
// //console.log(string2())

// // document.getElementById('title').addEventListener('click',

// //     () => {
// //        // console.log("clicked")
// //     }

// // )





// // spread operator

// // const friends = ['alom', 'shalom', 'dalom', 'komol'];
// // console.log(friends);
// // console.log(...friends)
// const newArray = ['kalom', ...friends]
// // console.log(newArray)

// const numbers = [20, 30, 50, 60, 70, 55, 66, 444, 666, 20]
// // console.log(Math.max(numbers))
// // console.log(Math.max(...numbers))






// desturctuting array and object
const hena = {
    name : 'hena',
    age : 20,
    friends : [ "hero alom", "bappa raj"],
    location : 'Not Found',
    status : 'missing'
}

// const henaName = hena.name
// const henaAge = hena.age
// const henaFriends = hena.friends
// const location = hena.location
// const status = hena.status

const {name, age, friends,status } = hena // for object need to 2nd braket 
// const [name, age, friends,status ] = hena

// console.log(henaName)
// console.log(name, age, friends,status)

const person = ["abul", "mokbul", {id:50}, "rokibul", 50]// for array use third braket

const [fstName, sndName] = person
console.log( fstName, sndName)
