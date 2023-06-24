const symbols = ['Rock','Paper','Scissors']
let playerScore = 0
let computerScore = 0
let playerHand
let computerHand

document.addEventListener('click', (e) => {
    if (symbols.includes(e.target.id)) {
        resetGame()
        updateScore(play(e.target.id,getComputerChoice()))
        updateResults()
    }
    else if (e.target.id == "Reset") {
        resetGame()
        resetResults()
    }
    
})

function resetGame () {
    document.getElementById("Game").innerHTML= "Press a button!"
}

function resetResults () {
    playerScore = 0
    computerScore = 0
    document.getElementById("Results").innerHTML = "Human vs computer"
}

function updateResults() {
    document.getElementById("Results").innerHTML= `Player ${playerScore} - Computer ${computerScore}`
}

function updateGame(game) {
    document.getElementById("Game").innerHTML= game
}

function updateScore(score) {
    if (score > 0) {
        playerScore++
        updateGame(`You won! ${playerHand} beats ${computerHand}.`)
    }
    else if (score < 0) {
        computerScore++
        updateGame(`You lose! ${computerHand} beats ${playerHand}.`)
    }
    else updateGame("Tie!")
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) 
    return symbols[choice];
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

function play(playerChoice, computerChoiche) {
    playerChoice = capitalize(playerChoice)
    playerHand = playerChoice
    computerHand = computerChoiche
    if (playerChoice == computerChoiche) {
        return 0
    }
    else if (playerChoice == "Rock" && computerChoiche == "Scissors"){
        return 1
    }
    else if (playerChoice == "Rock" && computerChoiche == "Paper"){
        return -1
    }
    else if (playerChoice == "Scissors" && computerChoiche == "Paper"){
        return 1
    }
    else if (playerChoice == "Scissors" && computerChoiche == "Rock"){
        return -1
    }
    else if (playerChoice == "Paper" && computerChoiche == "Scissors"){
        return -1
    }
    else {
        return 1
    }
}

//Can be used in console
function game (matches) {
    let playerScore = 0
    let computerScore = 0
   for (let index = 0; index < matches; index++) {
        let score = play(prompt(),getComputerChoice())
        if (score  > 0) {
            playerScore++
        }
        else if (score < 0) {
            computerScore++  
        }
        else {
            continue
        }
   }
   if (playerScore == computerScore) {
    return `Wow a Draw! (${playerScore} vs ${computerScore})`
   }
   return `${playerScore > computerScore ? "Player" : "Computer"} win! Player ${playerScore} - Computer ${computerScore}`
}