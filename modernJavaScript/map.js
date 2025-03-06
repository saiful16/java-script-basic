const numbers = [1,2,3,4,5,6,7,8,9]

const temp =[]
for(let number of numbers){
    const add1toNumber = number +1;
    temp.push(add1toNumber)
}
// console.log(temp)

const newArr = numbers.map(element => element+1)
console.log(newArr)

// const sqareArr = numbers.map(el => el* el)
// console.log(sqareArr)

const sqareArr = numbers.map(el =>{
    return el* el;
} )
console.log(sqareArr)

const friends = ['rahim', 'karim', 'rahim']
const newFriends = friends.map((element, index)=>{
    console.log(element)
    console.log(index)

})

/**The map() method in JavaScript is used to create a new array by applying a callback function to each element of an existing array. It does not modify the original array but instead returns a transformed array. The callback function takes three arguments: the current element, its index, and the array itself.17 Dec 2024
 */
