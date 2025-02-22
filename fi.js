// const animal = {
//     leg : 4,
//     eye : 2,
//     tail : 1
// }


// myAnimals.push(animal)

// for(let i=0; i<10; i++){
//     myAnimals.push(
// {
//     id: i+1,
//     power : (i %2 === 0) ? 5 : 1,
//     name : `animal-${i+1}`,
// }
//     )
// }

function createAnAnimal(){
    const myAnimals = [];
    for(let i=0; i<10; i++){
        myAnimals.push(
    {
        id: i+1,
        power : (i %2 === 0) ? 5 : 1,
        name : `animal-${i+1}`,
    }
        )
    }
    return myAnimals;
}

// console.log(createAnAnimal())
const animals = createAnAnimal()

function findAnimalName(){
    for(const animal of animals){
        console.log(animal.name)
    }
}

const animalName= findAnimalName()
const newAnimals = animals.map((animal, index)=>{
    return {
        ...animal,
        place: 'jungle',
        food : 'meat'
    }
})

console.log(newAnimals[5])
const animal5= newAnimals.find((item)=>{
    
    return item.name === 'animal-5'
    
})
console.log(animal5);
