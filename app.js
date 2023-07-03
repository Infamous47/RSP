
function compSelection() {
    const choice = ["rock", "paper", "scissor"];
    let x = (Math.floor(Math.random() * 3));
    return choice[x]
}

const playerChoice = playerSelection();
const compChoice = compSelection();

let playerScore = 1;
let compScore = 1;
let i = 0;


for (; i < 5; i++) {
    round();
    playerSelection();
}
function playerSelection() {
    let x = prompt("Please enter your choice");
    x = x.toLowerCase();
    return x;
}
function round() {
    if (playerChoice == "rock" && compChoice == "scissor") {
        console.log("Player Wins, Rock beats Scissor")
        ++playerScore;
    }
    else if (playerChoice == "paper" && compChoice == "scissor") {
        console.log("Computer Wins, Scissor beats paper");
        ++compScore;
    }
    else if (playerChoice == "rock" && compChoice == "paper") {
        console.log("Computer Wins, Paper beats Rock");
        ++compScore;
    }
    else if (playerChoice == "paper" && compChoice == "rock") {
        console.log("Player Wins, Paper beats Rock");
        ++playerScore;
    }
    else if (playerChoice == "scissor" && compChoice == "rock") {
        console.log("Computer Wins, Rock beats Scissor");
        ++compScore;
    }
    else if (playerChoice == "scissor" && compChoice == "paper") {
        console.log("Player Wins, Scissor beats Paper");
        ++playerScore;
    }
    else if (playerChoice == compChoice) {
        console.log("Draw");
    }
}



let score = [playerScore, compScore];
console.log(playerChoice, compChoice)
console.log(playerScore, compScore); 