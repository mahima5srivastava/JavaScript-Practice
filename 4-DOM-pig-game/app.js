/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScores, activePlayer, dice, maxScore, prevDiceCount

newGame(100)

document.querySelector(".btn-roll").addEventListener("click", function() {
    //1. random number
    dice = Math.floor(Math.random() * 6) + 1
    //2. Display Result
    var diceDOM = document.querySelector(".dice")
    diceDOM.style.display = "block"
    diceDOM.src = "dice-" + dice + ".png"
    //3. Update the round score if number is not 1
    if ((dice !== 1) && !(dice === 6 && dice === prevDiceCount)) {
        //Add Score
        roundScore += dice  
        document.getElementById("current-" + activePlayer).textContent = roundScore
        prevDiceCount = dice
    } else {
        //Next Player
        roundScore = 0
        document.getElementById("current-" + activePlayer).textContent = roundScore
        nextPlayer()
    }
})

document.querySelector(".btn-hold").addEventListener("click",function() {
    //Add round score to gloobal score
        scores[activePlayer] += roundScore
        roundScore = 0
        document.getElementById("score-" + activePlayer).textContent = scores[activePlayer]
        document.getElementById("current-" + activePlayer).textContent = roundScore
    
       //check if the player has won the game else next player
        if (scores[activePlayer] >= maxScore) {
            document.getElementById("name-" + activePlayer).textContent = "Winner!!!"
            document.querySelector(".dice").style.display = "none"
            document.querySelector(".btn-roll").style.display = "none"
            document.querySelector(".btn-hold").style.display = "none"
        } else {
            nextPlayer()
        }
})
document.querySelector("#maxScore").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        newGame(maxScore)
        maxScore = document.querySelector("#maxScore").value
        
    }
})


function newGame(maxScore) {
    scores = [0,0]
    roundScore = 0
    activePlayer = 0
    prevDiceCount = 0
    maxScore = maxScore
    document.querySelector(".dice").style.display = "none"
    document.querySelector(".btn-roll").style.display = "block"
    document.querySelector(".btn-hold").style.display = "block"
    document.getElementById("score-0").textContent = "0"
    document.getElementById("score-1").textContent = "0"
    document.getElementById("current-0").textContent = "0"
    document.getElementById("current-1").textContent = "0"
    document.querySelector(".player-0-panel").classList.add("active")
    document.querySelector(".player-1-panel").classList.remove("active")
    document.getElementById("name-0").textContent = "Player 1"
    document.getElementById("name-1").textContent = "Player 2"
}

function nextPlayer() {
        prevDiceCount = 0
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active")
        activePlayer = activePlayer === 0 ? 1 : 0
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("active")
}

document.querySelector(".btn-new").addEventListener("click", newGame)
