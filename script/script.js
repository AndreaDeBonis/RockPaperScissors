const symbols = ['Rock','Paper','Scissors']

document.addEventListener('click', (e) => {
    if (symbols.includes(e.target.id)) {
        console.log(play(e.target.id,getComputerChoice()))
    }
})


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