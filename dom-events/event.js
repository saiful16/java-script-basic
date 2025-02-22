function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// option-2 for handling events
function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
}

// option - 3 for event handling
const btnMakeBlue = document.getElementById('btn-make-blue')
// console.log(btnMakeBlue)
btnMakeBlue.onclick = function makeBlue() {
    document.body.style.backgroundColor = 'blue'
}

// option-4 for evnent handling 
const btnMakePurple = document.getElementById('btn-make-purple')
// console.log(btnMakePurple)
btnMakePurple.onclick = makePurple
function makePurple() {
    document.body.style.backgroundColor = 'purple'
}

// option - 5 best practice 

document.getElementById('btn-make-green').addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green'
})

document.getElementById('btn-make-golden').addEventListener('click', function(){
    document.body.style.backgroundColor = 'gold'
})