
let cards = []
let sum = 0
let isAlive = false
let hasBlackJack = false
let message

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.querySelector("#cards-el")

let player = {
name: "VR" ,
chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    
    let getRandomNum = Math.floor(Math.random()* 13) + 1
    if(getRandomNum === 1 ){
        return 11
    }
    else if (getRandomNum > 10){
        return 10
    }
    else
    return getRandomNum 
}

function startGame(){

    isAlive = true
   
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
     renderGame()
}

function renderGame() {

      cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++)
    {
        cardsEl.textContent += cards[i] + "  "
       
    }
    sumEl.textContent = "Sum: " + sum

 if (sum <= 20){

   message = "Do you want to draw a new card?"
  
}
else if (sum === 21){

    message = "Wohoo! You've got the Blackjack!"
    hasBlackJack = true
}
else {
    message = "We're logging out!"
    
    isAlive = false
}
messageEl.textContent = message
}


function newCard() {

 if (isAlive === true && hasBlackJack === false) {
        
let card = getRandomCard()
     sum += card
     cards.push(card)
      renderGame()
}
}






















