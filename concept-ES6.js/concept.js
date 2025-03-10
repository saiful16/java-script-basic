// 2️⃣ Pass by Value & Pass by Reference

// * pass by value -> only pass the value do not share the address. value of the variable will not get updated 
const name = "Jhon";

function greet(val){
    console.log(val);
    val = 20;
    console.log("Hello", val)
}

greet(name)

//* pass by reference -> pass by reference. share memory address also value also get updated.

const arr = [10, 20, 30, 40, 50]

function squareArr(numbers){
    for(let i =0; i < numbers.length; i++){
        let element = numbers[i]
        numbers[i] = element* element;
    }
    console.log(numbers)
}

console.log(arr);
squareArr(arr)
console.log(arr)

// var let and const 
// var is a global scope variable