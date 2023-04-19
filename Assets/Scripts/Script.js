// Variables
const computerChoiceDisplay = document.getElementById("computerChoice");
const userChoiceDisplay = document.getElementById("userChoice");
const resultDisplay = document.getElementById("result");
const gameChoices = document.querySelectorAll("button");
const matchHistoryDiv = document.getElementById("matchHistory");
const displayDiv = document.getElementById("display");
let userChoice
let computerChoice
let result


gameChoices.forEach(gameChoices => gameChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResults()
}))
// Functions
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 
    
    if (randomNumber === 1){
        computerChoice = "Rock"
    }
    if (randomNumber === 2){
        computerChoice = "Scissors"
    }
    if (randomNumber === 3){
        computerChoice = "Paper"
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResults() {
    if (computerChoice === userChoice){
        result = "Its a draw!"
    }
    else if (computerChoice === "Rock" && userChoice === "Paper"){
        result = "You Win!"
    }
    else if (computerChoice === "Scissors" && userChoice === "Rock"){
        result = "You Win!"
    }
    else if (computerChoice === "Paper" && userChoice === "Scissors"){
        result = "You Win!"
    }
    else if (computerChoice === "Rock" && userChoice === "Scissors"){
        result = "You Lose!"
    }
    else if (computerChoice === "Scissors" && userChoice === "Paper"){
        result = "You Lose!"
    }
    else if (computerChoice === "Paper" && userChoice === "Rock"){
        result = "You Lose!"
    }
    resultDisplay.innerText = result
    
    const resultDiv = document.createElement("div");

    resultDiv.innerHTML = `${userChoice} vs ${computerChoice} : ${result}`;
    displayDiv.appendChild(resultDiv);
}
