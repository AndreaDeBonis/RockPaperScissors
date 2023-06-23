const symbols = ['Rock','Paper','Scissors']
let playerScore = 0
let computerScore = 0

document.addEventListener('click', (e) => {
    resetTie()
    if (symbols.includes(e.target.id)) {
        updateScore(play(e.target.id,getComputerChoice()))
    }
    else if (e.target.id == "Reset") {
        resetResults()
        return
    }
    updateResults()
})

function resetTie () {
    document.getElementById("Tie").innerHTML= ""
}

function resetResults () {
    playerScore = 0
    computerScore = 0
    document.getElementById("Results").innerHTML = ""
}

function updateResults() {
    document.getElementById("Results").innerHTML= `Player ${playerScore} - Computer ${computerScore}`
}

function updateScore(score) {
    if (score > 0) playerScore++
    else if (score < 0) computerScore++
    else document.getElementById("Tie").innerHTML= "Tie!"
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