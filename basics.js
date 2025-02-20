// age = 24;
// fullName = "Md Saiful Islam";
// // console.log(age);
// // console.log(fullName);
// a= null;
// b = undefined;
// // console.log(a);
// // console.log(b);

// let score = prompt("Please enter your score : " );

const student = {
    name : "Sakib khan",
    id: 121,
    address : "kings roads",
    isSingle : true,
    friends : ['apu', 'raj', 'salman', 'amir'],
    car :{
        brands : 'Tesla',
        price : 5000000,
        made : 2025,
        manufacturer : {
            name : 'Tesla-EV',
            coe : 'Elon Mask',
            country : 'USA'
        }
    }
}

// console.log(student);
// console.log(student.car.manufacturer.name);

const numbers = [45, 65, 75, 98, 19]
// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number)
// }


for(const number of numbers){
    // console.log(number);
}

const products= [
    {id: 1, name : 'walton phone', price: 19000},
    {id: 2, name : 'xiaomi phone', price: 19000},
    {id: 3, name : 'mac book air', price: 19000},
    {id: 4, name : 'lenevo yoga laptop', price: 19000},
    {id: 5, name : 'dell inspiron laptop', price: 19000},
    {id: 6, name : 'samsung phone', price: 19000},
    {id: 7, name : 'Nokia phone', price: 19000},
    {id: 8, name : 'Oppo phone', price: 19000},
]

for(const product of products){
    // console.log(product)
}

function matchedProduct(products, search){
    const matched =[];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product)
        }
    }
    return matched;
}

console.log(matchedProduct(products, 'laptop'));
