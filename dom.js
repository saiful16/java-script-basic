// console.log("hello from js")
// console.log(document.body)

const sections = document.querySelectorAll('section')
// console.log(sections)
for(const section of sections){
    console.log(section)
    section.style.border = '2px solid steelblue'
    section.style.margin = '10px';
    section.style.borderRadius = '10px';
    section.style.padding = '5px'
    section.style.backgroundColor = 'lightgray'
}

const fruitContainer = document.getElementById('fruits-container');
console.log(fruitContainer)
fruitContainer.style.backgroundColor = 'green'
fruitContainer.classList.add('bg-blue')


const placesList = document.getElementById('places-list')
// console.log(placesList.innerHTML)

const newLi = document.createElement('li')
// console.log(newLi)
newLi.innerText = 'Germany'
placesList.appendChild(newLi)