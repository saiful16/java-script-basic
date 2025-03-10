const products =[
    {id :1, name: 'ipone', color : "gold", price : 1000, brand: "apple"},
    {id :2, name: 'xiaomi', color : "black", price : 100, brand: "xiaomi"},
    {id :3, name: 'samsumg s25', color : "black", price : 1100, brand: "samsung"},
    {id :4, name: 'ipone 16', color : "black", price : 1200, brand: "apple"},
    {id :5, name: 'nokia', color : "gold", price : 800, brand: "Nokia"}
]

// for(let product of products){
//     console.log(product)
// }

// for each does not need a variale to store it. it does not return any value.
products.forEach(product => {
    if(product.color === 'black'){
        // console.log(product)
    }
})

// array filter -> will give a new arry. need a variable to store value
// filter return us the value of array based on the condition we provide.
const newProduct = products.filter(product => product.price > 1000)
// console.log(newProduct)

// find will return the 1st value that match in the condition.
// it will return value as an object.
const secondProduct = products.find(product => product.id === 4)
console.log(typeof secondProduct)

