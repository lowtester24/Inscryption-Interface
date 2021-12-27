// Main Variables //

let cardPlace = document.body.querySelector('p#card-placement')
let cardAmount = document.body.querySelector('p#card-amount')
let bellButton = document.body.querySelector('button#btn')



// Card Amount Randomizer Function //

function Randomizer(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

let cp = cardPlace.innerHTML = `Row ${ Randomizer(1,4) }` 



// Card Placement Randomizer Function //

let ca = cardAmount.innerHTML = `${ Randomizer(5, 10 ) } Cards` 



// Audio File Variables //

var audio = document.body.querySelector("audio#myAudio");

function playAudio() {
  audio.play();
}



// Bell Ringing Function //

bellButton.addEventListener('click', bellClick)
bellButton.addEventListener('mouseenter', bellHover)
bellButton.addEventListener('mouseout', bellOut)

let btnAnim = document.body.querySelector('img#bell-icon')

function bellClick() {
    playAudio()
    cardPlace.innerHTML = `Row ${ Randomizer(1,4) }`
    cardAmount.innerHTML = `${ Randomizer(5, 10 ) } Cards` 
}

function bellHover() {
    btnAnim.style.webkitAnimationPlayState = "running";
}

function bellOut() {
    btnAnim.style.webkitAnimationPlayState = "paused";
}